const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const { Configuration, OpenAIApi } = require("openai")


cmd({  
    pattern: "ai",
    react: "🧠",
    alias: ["chat"],
    desc: "ChatGpt Ai chat",
    category: "extra",
    use: '.ai',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('*Please enter the Message*')
const db_pool = new DBM({
    db: config.DATABASE_URL
})
const datada = await db_pool.get('OPENAI_KEY')
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: q ,
});
let msg = completion.data.choices[0].text
 await conn.sendMessage(from , { text: "*Result from openAi chatGpt Module*\n\n" +msg }, { quoted: mek } )
} catch (e) {
reply('*Hellow ! OpenAi Key not in Database*\n\nUse -: ```.setup OPENAI_KEY=KEY```\n\nget key using this link -: https://platform.openai.com/account/api-keys\n\nError -:' + e )
l(e)
}
})
