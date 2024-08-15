const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const {subsearch , subdl }  = require('@sl-code-lords/si-subdl')
cmd({
    pattern: "slsub",
    react: "📃",
    alias: ["srisub"],
    desc: "Download Sinhala Subtitles from Web Site",
    category: "download",
    use: '.slsub < Movie Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to download Subtitles*")
const duka = await subsearch(q)
const latest = await subdl(duka.results[0].link)
const maru =`\n🧾 *TAIFUR-X LUCIFER SUB DOWNLOADER* 🧾

📊 *Movie Title* - *_${latest.results.title}_*

🔒 *Creator* - *_${latest.results.creater}_*

🖇️ *Link* - *_${duka.results[0].link}_*

`
  await conn.sendMessage(from,{image:{url: latest.results.img },caption: maru + "*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*" },{quoted:mek })
  await conn.sendMessage(from,{ document:{url:latest.results.dl_link},caption:latest.results.title ,mimetype:'application/zip',fileName:`${latest.results.title}.zip`}, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "sublist",
    react: "🔎",
    alias: ["subsearch","ssub","findsub"],
    desc: "Search All Subtitles from Web Site",
    category: "search",
    use: '.sublist < Movie Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ *Please enter movie name to Search Subtitles*")
const vid = await subsearch(q)
    let yt = '\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *ᴛᴀɪꜰᴜʀ x ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.results ) {
        yt += `📃 *Movie Name - ${i.title}*\n🔗 _Link : ${i.link}_ \n\n\n`
    }
 await conn.sendMessage(from,{image:{url: "https://telegra.ph/file/d05c60fb40c1ab9f90600.jpg" },caption: yt + "*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "subdl",
    react: "📃",
    alias: ["subdllink"],
    desc: "Download Subtitles from Links",
    category: "download",
    use: '.subdl < Sub Link >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("❗ Please enter movie Link to download Subtitles*")
if(!q.includes('baiscope')) return reply('🚫 *Please enter Valid Movie url*')
 const latest = await subdl(q)
const maru =`\n🧾 *TAIFUR-X SL SUBTITLES DOWNLOADER* 🧾

📊 *Movie title* - ${latest.results.title}*

🔒 *Creator* - ${latest.results.creater}

🖇️ *Link* - ${q}

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`
 await conn.sendMessage(from , { text: maru }, { quoted: mek } )
   await conn.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})



