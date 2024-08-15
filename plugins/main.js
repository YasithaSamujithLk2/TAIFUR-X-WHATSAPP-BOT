const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const os = require("os")
const si = require('systeminformation')
cmd({
    pattern: "alive",
    react: "🏆",
    alias: ["online","test","bot"],
    desc: "To Get Bot's Alive Message",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const data = await db_pool.get('ALIVE_MESSAGE')
		let logoimage = await db_pool.get('ALIVE_IMAGE')
await conn.sendMessage(from, { image: { url: logoimage }, caption: data }, { quoted: mek })
} catch (e) {
const data = await fetchJson("https://raw.githubusercontent.com/Itxtaifur/UPLOADS/main/JSON/info.json")
await conn.sendMessage(from, { image: { url: data.image }, caption: data.text }, { quoted: mek })
}

})

cmd({
    pattern: "system",
    react: "🖥️",
    alias: ["s_info"],
    desc: "To Check bot\'s System information",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const ccp = await si.cpu()
const cinfo = await si.version()
let timee = await si.time()
const plat = os.hostname()
let data = await fetchJson('https://raw.githubusercontent.com/Itxtaifur/TAIFIR-X-WHATSAPP-BOT/main/package.json')

if ( plat.length > 15 ) {
const infomsg = `🖥️  *TAIFUR-X 2.0 SYSTEM INFORMATIONS*  🖥️

🤖  *_Bot's System informations_*

1.  _Runtime -: ${runtime(process.uptime())}_
2.  _Ram Usage -: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
3.  _Bot Version -: ${data.version} Stable_

📶  *_Server System informations_*

1.  _Platform : Heroku_
2.  _Running OS : ${os.platform()}_
3.  _CPU Manufacture  -: ${ccp.manufacturer}_
4.  _CPU Brand -: ${ccp.brand}_
5.  _CPU Speed -: ${ccp.speed}_

⚙️  *_System Data Collector Engine_*

1. _Engine Version -: ${cinfo}_

💻  *_Running Server's information_*

1. _Server Time Zone -: ${timee.timezone}_
2. _Time Zone Name -: ${timee.timezoneName}_`
return await conn.sendMessage(from , { text: infomsg  }, { quoted: mek } )

}


const infomsg = `🖥️  *TAIFUR-X 2.0 SYSTEM INFORMATIONS*  🖥️

🤖  *_Bot's System informations_*

1.  _Runtime -: ${runtime(process.uptime())}_
2.  _Ram Usage -: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
3.  _Bot Version -: ${data.version} Stable_

📶  *_Server System informations_*

1.  _Platform : ${plat}_
2.  _Running OS : ${os.platform()}_
3.  _CPU Manufacture  -: ${ccp.manufacturer}_
4.  _CPU Brand -: ${ccp.brand}_
5.  _CPU Speed -: ${ccp.speed}_

⚙️  *_System Data Collector Engine_*

1. _Engine Version -: ${cinfo}_

💻  *_Running Server's information_*

1. _Server Time Zone -: ${timee.timezone}_
2. _Time Zone Name -: ${timee.timezoneName}_`
 await conn.sendMessage(from , { text: infomsg  }, { quoted: mek } )

}catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "menu",
    react: "📁",
    alias: ["panel","help","cmd"],
    desc: "Bot main command list menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
await conn.sendMessage(from, { audio: { url: 'https://github.com/Itxtaifur/Taifur-md/raw/main/assets/lv_0_20240626163749.mp3' }, mimetype: 'audio/mp4', ptt : true ,fileName: 'alive.mp3' })
const yt =`
📑 *TAIFUR-X WHATSAPP BOT COMMANDS LIST*     
    🧸𝐏𝐞𝐨𝐩𝐥𝐞 𝐥𝐞𝐚𝐯𝐞, 𝐦𝐞𝐦𝐨𝐫𝐢𝐞𝐬 𝐫𝐞𝐦𝐚𝐢𝐧🧸
📚 This is the result of our team's hard work and our team owns the bot's rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances

🔠 _Please reply a number to get you need Sub-Menu All commands available in allmenu ._

───────────────────────────── 

♠️ 1.1  Main Command list
♠️ 1.2  Download command list
♠️ 1.3  Search Command list
♠️ 1.4  Profile Command ist
♠️ 1.5  Group Command list
♠️ 1.6  Extra command list
♠️ 1.7  Text to Image command list

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`

await conn.sendMessage(from,{text: yt },{quoted:mek })

} catch (e) {
reply(e)
}

})

cmd({
    pattern: "owner",
    react: "✈",
    alias: ["ownernumber"],
    desc: "Get Bot Owner Number",
    category: "main",
    use: '.owner',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
       const db_pool = new DBM({
    db: config.DATABASE_URL
}) 
 const data = await db_pool.get('OWNER_NAME')
  let puka = await db_pool.get('OWNER_NUMBER')
 const vcard = `BEGIN:VCARD\n` // metadata of the contact card
            + `VERSION:3.0\n`
            + `FN:${data}\n` // full name
            + `ORG:𝐓𝐀𝐈𝐅𝐔𝐑-𝐗 𝐆𝐀𝐍𝐆 𝟐𝐊𝟐𝟒;\n`// the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=${puka}:+${puka}\n`// WhatsApp ID + phone number
            + `END:VCARD`
await conn.sendMessage(from,{ contacts: { displayName: data ,contacts: [{ vcard }] }},{quoted:mek })
} catch (e) {
await conn.sendMessage(from,{text: "*❗ No Added Data in Database*\n\n_Please Do this to Use Your Number for this Vcard_\n\n1. ```.apply OWNER_NUMBER=YOUR NUMBER```\n2. ```.apply OWNER_NAME=YOUR NAME```\n\nᴛᴀɪꜰᴜʀ  ᴏꜰꜰɪᴄɪᴀʟ\nᴛᴀɪꜰᴜʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ɪɪ" },{quoted:mek })
const vcard = `BEGIN:VCARD\n` // metadata of the contact card
            + `VERSION:3.0\n`
            + `FN:TAIFUR-X USER\n` // full name
            + `ORG:𝐓𝐀𝐈𝐅𝐔𝐑-𝐗 𝐆𝐀𝐍𝐆 𝟐𝐊𝟐𝟒;\n`// the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=4593707292:+94711421243\n`// WhatsApp ID + phone number
            + `END:VCARD`
await conn.sendMessage(from,{ contacts: { displayName: "TAIFUR-X USER" ,contacts: [{ vcard }] }},{quoted:mek })

}
})

cmd({
    pattern: "script",
    react: "🧭",
    alias: ["sc"],
    desc: "To Get Cyber-X Bot Script",
    category: "main",
    use: '.script',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const deta = await fetchJson('https://api.github.com/repos/Itxtaifur/TAIFUR-X-WHATSAPP-BOT')
let data = await fetchJson('https://raw.githubusercontent.com/Itxtaifur/CYBER-X-WHATSAPP-BOT/main/package.json')
const maru =`*TAIFUR-X 2.0 WHATSAPP USER BOT* 

This is the result of our team's hard work and our team owns the bot's rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances.

https://github.com/Itxtaifur/TAIFUR-X-WHATSAPP-BOT 

*─────────────────────*
🎲 *TAIFUR-X 2.0 Repostory Status*
*─────────────────────*

*️⃣ Stars - ${deta.stargazers_count}
🔀 Forks - ${deta.forks_count}
🛜 Watchers - ${deta.subscribers_count}

*─────────────────────*

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`
await conn.sendMessage(from,
{text: maru ,
contextInfo:{
        externalAdReply:{
            title: "TAIFUR-X 2.0 WHATSAPP BOT" ,
            body: `Latest released Version : v${data.version}`,
            thumbnail: await getBuffer("https://telegra.ph/file/de783e49d45aff62460eb.jpg"),
            mediaType:2,
            mediaUrl: "https://github.com/Itxtaifur/TAIFUR-X-WHATSAPP-BOT",
        }
}
    },

{quoted:mek })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
