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
    pattern: "video",
    alias: ["playv","ytv"],
    use: '.video lelena',
    react: "🎥",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply("❔ *Please enter Query for Search* ")
if ( isUrl(q) ) {
if ( !q.includes('youtu') ) return reply('*Please enter valid Youtube Url* ❗')
 const kanu = await dl.youtubedl(q)
let thama =`
*TAIFUR-X 2.1 YTMP4 DOWNLOADER*  📥

*🎶 Title : ${kanu.title}*

────────────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ Qᴜᴀʟɪᴛʏ*

│1 - 240P QUALITY 
│2 - 360P QUALITY 
│3 - 720P QUALITY 
│4 - 1080P QUALITY 

ᴛᴀɪꜰᴜʀ-x ʏᴛ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ʏᴏᴜᴛᴜʙᴇ ɪᴅ - ${kanu.id}`

return reply(thama)



}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
let thama =`
*TAIFUR-X 2.1 YTMP4 DOWNLOADER*  📥

*🎶 Title : ${anu.title}*

📺 Views : ${anu.views}

🕹️ Duration : ${anu.timestamp}

📽️ Channel : ${anu.author.name}

──────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ Qᴜᴀʟɪᴛʏ*

│1 - 240P QUALITY 
│2 - 360P QUALITY 
│3 - 720P QUALITY 
│4 - 1080P QUALITY 

ᴛᴀɪꜰᴜʀ-x ʏᴛ ꜱᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ʏᴏᴜᴛᴜʙᴇ ɪᴅ - ${anu.videoId}`
reply(thama)
} catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})
