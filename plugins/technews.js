const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const tech = require("tech-news-scraper")
cmd({
    pattern: "technews",
    react: "📃",
    alias: ["tnews"],
    desc: "Search Latest technology news from Web Sites",
    category: "search",
    use: '.technews',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const news = await tech.allNews()
let latest = await  tech.getNews(news.result[0].link)
    console.log(latest)
const maru =`\n❍⚯────────────────────⚯❍
               🌐 *𝙻𝙰𝚃𝙴𝚂𝚃 𝚃𝙴𝙲𝙷 𝙽𝙴𝚆𝚂*  🌐
 ⚡ *ᴛᴀɪꜰᴜʀ x ᴛᴇᴄʜ ɴᴇᴡꜱ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡
❍⚯────────────────────⚯❍

📊 *Title - ${latest.result.title}*

${latest.result.desc}

🖇️ _Link_ - ${latest.result.link}

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "technewsall",
    react: "🔎",
    alias: ["tnewsall"],
    desc: "Search All technology news from Web Sites",
    category: "search",
    use: '.technewsall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const vid = await tech.allNews()
    let yt = '\n❍⚯────────────────────⚯❍\n        🌐 *𝚃𝙴𝙲𝙷𝙽𝙾𝙻𝙾𝙶𝚈  𝙽𝙴𝚆𝚂  𝙻𝙸𝚂𝚃*  🌐\n ⚡ *ᴛᴀɪꜰᴜʀ x ᴛᴇᴄʜ ɴᴇᴡꜱ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.result ) {
        yt += `📃 *${i.no} - ${i.title}*\n📊 Date : ${i.date}\n🔗 _Link : ${i.link}_ \n\n\n`
    }
 await conn.sendMessage(from,{image:{url: "https://i.ibb.co/V2yG79P/Banner-Maker-27062023-101137.jpg" },caption: yt + "*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n' + e )
l(e)
}
})
