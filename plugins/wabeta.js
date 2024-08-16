const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const wabetainfo = require('wabetainfo')
const ainfo = require("@sl-code-lords/wabetainfo")
cmd({
    pattern: "wabetaall",
    react: "🥏",
    alias: ["wabetainfoall","cyber_wabetaall"],
    desc: "Whatsappbetainfo latest all news.",
    category: "search",
    use: '.wabetaall',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const vid = await wabetainfo.firstpageposts()
    let yt = '\n❍⚯────────────────────⚯❍\n🥏 *𝚆𝙱𝙸 𝚂𝙴𝚁𝚅𝙸𝙲𝙴 𝙻𝙰𝚃𝙴𝚂𝚃 𝙽𝙴𝚆𝚂 𝙻𝙸𝚂𝚃*  🥏\n      ⚡ *ᴛᴀɪꜰᴜʀ x ᴡᴀ ʙᴇᴛᴀ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡\n❍⚯────────────────────⚯❍\n\n'
    for (let i of vid ) {
        yt += `🥏 *Title - ${i.title} for ${i.platform} - ${i.date}* \n🔗 *Url : ${i.url}*\n📁 *Description : ${i.shortdesc}* \n\n\n\n`
    }
 await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/4cba162e3b2eb338c6934.jpg" },caption: yt + "*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})

cmd({
    pattern: "wabeta",
    react: "🥏",
    alias: ["wabetanews","cyber_wabeta"],
    desc: "Whatsappbetainfo latest news.",
    category: "search",
    use: '.wabeta',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const duka = await ainfo.latest()
 const ok = `*${duka.title}*

📃. *Date - ${duka.date}*

⚒️. *Platform - ${duka.platform}*

🖇️. Url - ${duka.url}

🧾 *WhatsAppBetaInfo Service Latest News Discription* 🧾

🔇 ${duka.shortdesc}

🔊 ${duka.fulldesc}

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`
reply(ok)
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e)
l(e)
}
})