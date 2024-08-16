const config = require('../config')
const fg = require('api-dylux');
const l = console.log
const { cmd, commands } = require('../command')
const dl = require('@bochilteam/scraper')  
const ytdl = require('youtubedl-core');
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "yts",
    alias: ["ytsearch","cyber_yts"],
    use: '.yts lelena',
    react: "🔎",
    desc: "Search and get details from youtube.",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me a words to search*')
try {
let yts = require("yt-search")
var arama = await yts(q);
} catch(e) {
    l(e)
return await conn.sendMessage(from , { text: '🚫 *Unfortunately Error found..!!*' }, { quoted: mek } )
}
var mesaj = '';
arama.all.map((video) => {
mesaj += ' *🖲️' + video.title + '*\n🔗 ' + video.url + '\n\n'
});
await conn.sendMessage(from , { text:  mesaj }, { quoted: mek } )
} catch (e) {
    l(e)
  reply('*Error !!*')
}
})


cmd({
    pattern: "song2",
    alias: ["ytsong2" ,"play2","cyber_song2"],
    use: '.song2 lelena',
    react: "🎶",
    desc: "Search & download yt song as audio type",
    category: "download",
    filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me a song name*')
if ( isUrl(q) ) {
if(!q.includes('youtu')) return reply('❓ *Please enter Youtube Url*')
let infoYt = await ytdl.getInfo(q);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
    reply("❌ ```Unable to upload this file according to your Platform Upload Size```❗ \n\n *_Please update your MAX_SIZE var on the Upload Size on your platform_* ❗🧑‍💻");
    return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(q, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    })
    .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
if ( fileSizeInMegabytes > 100 ) {
 await conn.sendMessage(from , { text: "*This file can't send as a audio type...* ❗\n\n🔁 ```Trying to send it as Document File... Please Wait...!```"}, { quoted: mek } )
 await conn.sendMessage(from, { document : fs.readFileSync(`./${randomName}`)  ,caption: titleYt ,mimetype: 'audio/mpeg', fileName: `${titleYt}.mp3` }, { quoted: mek })
 return fs.unlinkSync(`./${randomName}`);
 }
    let sendaE =  await conn.sendMessage(from, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName:  `${titleYt}.mp3` }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '🎶', key: sendaE.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(lang.SIZE);
}
fs.unlinkSync(`./${randomName}`);


}
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `*TAIFUR-X YT MP3 Downloader*  ✔️

╭════════════════⊷❍
┃
┃*🎶 Title:* ${anu.title}
┃
┃*📺 Views:* ${anu.views}
┃
┃*🕹️ Duration:* ${anu.timestamp}
┃
┃*🔗 Url:* ${anu.url}
┃
╰════════════════⊷❍

📥  *ʟᴀᴛᴇꜱᴛ ᴛᴡᴏ ʀᴇꜱᴜʟᴛꜱ*  📥

📌  *${search.videos[1].title}* - _${search.videos[1].url}_

📌  *${search.videos[2].title}* - _${search.videos[2].url}_

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`

await conn.sendMessage(from, { image: { url: anu.thumbnail }, caption: cap}, { quoted: mek })
let infoYt = await ytdl.getInfo(anu.url);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
    reply("❌ ```Unable to upload this file according to your Platform Upload Size```❗ \n\n *_Please update your MAX_SIZE var on the Upload Size on your platform_* ❗🧑‍💻");
    return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(anu.url, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    })
    .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
if ( fileSizeInMegabytes > 100 ) {
 await conn.sendMessage(from , { text: "*This file can't send as a audio type...* ❗\n\n🔁 ```Trying to send it as Document File... Please Wait...!```"}, { quoted: mek } )
 await conn.sendMessage(from, { document : fs.readFileSync(`./${randomName}`)  ,caption: anu.title ,mimetype: 'audio/mpeg', fileName: `${titleYt}.mp3` }, { quoted: mek })
 return fs.unlinkSync(`./${randomName}`);
 }
    let sendaE =  await conn.sendMessage(from, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mpeg', fileName:  `${titleYt}.mp3` }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '🎶', key: sendaE.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(lang.SIZE);
}
fs.unlinkSync(`./${randomName}`);
} catch (e) {
  reply("🚫 *Request incompleted !* ```EROR:YTDL```\n\n 🔄 *_Solution - Try Again Little Movement_* 🧑‍💻")
  l(e)
}
})

cmd({
    pattern: "fsong",
    alias: ["ftypesong","doc"],
    use: '.fsong lelena',
    react: "📁",
    desc: "Search & download yt song as document.",
    category: "download",
    filename: __filename
},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('*Please give me a song name*')
let yts = require("yt-search")
let search = await yts(q)
let anu = search.videos[0]
const cap = `*TAIFUR-X YT MP3 Downloader*  ✔️

╭════════════════⊷❍
┃
┃*🎶 Title:* ${anu.title}
┃
┃*📺 Views:* ${anu.views}
┃
┃*🕹️ Duration:* ${anu.timestamp}
┃
┃*🔗 Url:* ${anu.url}
┃
╰════════════════⊷❍

📥  *ʟᴀᴛᴇꜱᴛ ᴛᴡᴏ ʀᴇꜱᴜʟᴛꜱ*  📥

📌  *${search.videos[1].title}* - _${search.videos[1].url}_

📌  *${search.videos[2].title}* - _${search.videos[2].url}_

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`

await conn.sendMessage(from, { image: { url: anu.thumbnail }, caption: cap}, { quoted: mek })
let infoYt = await ytdl.getInfo(anu.url);
if (infoYt.videoDetails.lengthSeconds >= videotime) {
    reply("❌ ```Unable to upload this file according to your Platform Upload Size```❗ \n\n *_Please update your MAX_SIZE var on the Upload Size on your platform_* ❗🧑‍💻");
    return;
}
let titleYt = infoYt.videoDetails.title;
let randomName = getRandom(".mp3");
const stream = ytdl(anu.url, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    })
    .pipe(fs.createWriteStream(`./${randomName}`));
await new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.on("finish", resolve);
});

let stats = fs.statSync(`./${randomName}`);
let fileSizeInBytes = stats.size;
let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
if (fileSizeInMegabytes <= config.MAX_SIZE) {
    let sendaE = await conn.sendMessage(from, { document : fs.readFileSync(`./${randomName}`)  ,caption: anu.title ,mimetype: 'audio/mpeg', fileName: `${titleYt}.mp3` }, { quoted: mek })
    await conn.sendMessage(from, { react: { text: '📁', key: sendaE.key }})
await conn.sendMessage(from, { react: { text: '✔️', key: mek.key }})
return fs.unlinkSync(`./${randomName}`);
} else {
reply(lang.SIZE);
}
fs.unlinkSync(`./${randomName}`);
} catch (e) {
  reply("🚫 *Request incompleted !* ```EROR:YTDL```\n\n 🔄 *_Solution - Try Again Little Movement_* 🧑‍💻")
  l(e)
}
})
