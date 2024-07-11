const {
default: makeWASocket,
useMultiFileAuthState,
fetchLatestBaileysVersion,
DisconnectReason,
downloadContentFromMessage,
jidNormalizedUser,
getContentType} = require('@whiskeysockets/baileys')
const fs = require('fs')
const P = require('pino')
const pino = require('pino')
const config = require('./config')
const qrcode = require('qrcode-terminal')
const dl = require('@bochilteam/scraper')
const { DBM } = require('postgres_dbm')
const util = require('util')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('./lib/functions')
const { sms,downloadMediaMessage } = require('./lib/msg')
const { search , download } = require('aptoide-scraper')
const axios = require('axios')
const { mods } = require('fouadwa-scraper')
const fg = require('api-dylux')
const getFBInfo = require("fb-downloader-new");
const Heroku = require('heroku-client')
const FileType = require("file-type")
const { cmd, commands } = require('./command')
const { File } = require('megajs')
const prefix = config.PREFIX 
const ownerNumber = ['595995660558']
const l = console.log
const MAIN_LOGGER = pino({
    timestamp: () => `,"time":"${new Date().toJSON()}"`
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const msgRetryCounterCache = new NodeCache();

const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
});

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const credsPath = path.join(__dirname, '/auth_info_baileys/creds.json');

if (!fs.existsSync(credsPath)) {
    if (!config.SESSION_ID) {
        console.log('Please add your session to SESSION_ID env !!');
        process.exit(1); 
    }
    const sessdata = config.SESSION_ID.split("MASTER-MD&")[1];
    const url = `https://pastebin.com/raw/${sessdata}`;
    console.log(sessdata);
    axios.get(url)
        .then(response => {
            const data = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
            return fs.promises.writeFile(credsPath, data);
        })
        .then(() => {
            console.log("✔ Session Successfully Loaded !!");
        })
        .catch(err => {
            console.error("Failed to fetch session data:", err);
            process.exit(1);
        });
}

const app = express();
const PORT = process.env.PORT || 5000;

async function connectToWA() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/');
    const { version, isLatest } = await fetchLatestBaileysVersion();
    console.log(`🔰 MASTER-MD using WA v${version.join('.')}, isLatest: ${isLatest}`);
    const Matrix = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ["MASTER-MD-V3", "safari", "3.3"],
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id);
                return msg.message || undefined;
            }
            return {
                conversation: "MASTER-MD IS POWERFUL WHATSAPP BOT"
            };
        }
    });

    Matrix.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
                connectToWA();
            }
        } else if (connection === 'open') {
            if (initialConnection) {
                console.log(chalk.green("🔰 Connected Successfull Dear ✅"));
                Matrix.sendMessage(Matrix.user.id, { text: ` *👨‍💻MASTER-MD-V3 IS CONNECTED👨‍💻* ` });
                initialConnection = false;
            } else {
                console.log(chalk.blue("♻️ Connection reestablished after restart."));
            }
        }
    });
    
    Matrix.serialize = (m) => smsg(Matrix, m, store)

    Matrix.ev.on('creds.update', saveCreds);

    Matrix.ev.on("messages.upsert", async chatUpdate => await Handler(chatUpdate, Matrix, logger));
    Matrix.ev.on("call", async (json) => await Callupdate(json, Matrix));
    Matrix.ev.on("group-participants.update", async (messag) => await GroupUpdate(Matrix, messag));

    if (config.MODE === "public") {
        Matrix.public = true;
    } else if (config.MODE === "private") {
        Matrix.public = false;
    }

    Matrix.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.key.fromMe && config.AUTO_REACT) {
                console.log(mek);
                if (mek.message) {
                    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                    await doReact(randomEmoji, mek, Matrix);
                }
            }
        } catch (err) {
            console.error('Error during auto reaction:', err);
        }
    });
}

app.get("/", (req, res) => {
res.send("*MASTER-MD WhatsApp Bot Working successfully..!*");
});
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}`));
setTimeout(() => {
connectToWA()
}, 5000);
