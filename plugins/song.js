const config = require('../config')
const fg = require('api-dylux');
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('youtubedl-core')
var { yt5s }  = require('@sl-code-lords/youtube-dl')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "song",
    alias: ["play","yt","audio"],
    use: '.song lelena',
    react: "🎶",
    desc: "To Download song From Youtube",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply("❔ *Please enter Query for Search* ")
if ( isUrl(q) ) {
if ( !q.includes('youtu') ) return reply('*Please enter valid Youtube Url* ❗')
 const kanu = await dl.youtubedl(q)
let thama =`
*TAIFUR-X  2.0 YTMP3 DOWNLOADER*  📥

*🎶 Title : ${kanu.title}*

🖇️ Url : ${q}

─────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ ᴛʏᴘᴇ*

*1 | 🎶 Audio File*

*2 | 📁 Document File*

ᴛᴀɪꜰᴜʀ-x ʏᴛ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ʏᴏᴜᴛᴜʙᴇ ɪᴅ - ${kanu.id}`

return await conn.sendMessage(from, { image: { url : kanu.thumbnail } , caption: thama }, { quoted: mek })





}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
let thama =`
*TAIFUR-X  2.0 YTMP3 DOWNLOADER*  📥

*🎶 Title : ${anu.title}*

*🖇️ Url : ${anu.url}*

*📺 Views : ${anu.views}*

*🕹️ Duration : ${anu.timestamp}*

*📽️ Channel : ${anu.author.name}*

─────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ ᴛʏᴘᴇ*

*1 | 🎶 Audio File*

*2 | 📁 Document File*

ᴛᴀɪꜰᴜʀ-x ʏᴛ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ʏᴏᴜᴛᴜʙᴇ ɪᴅ - ${anu.videoId}`
await conn.sendMessage(from, { image: { url : anu.thumbnail } , caption: thama }, { quoted: mek })

} catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})
