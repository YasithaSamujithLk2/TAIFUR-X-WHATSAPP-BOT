const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const translate = require('translate-google')
const fs=require('fs')
const fg = require('api-dylux')
const { mods } = require('fouadwa-scraper')
const dl = require('@bochilteam/scraper')
const { exec } = require("child_process")
const { aio , facebook  } = require('betabotz-tools') 
const { toAudio } = require('../lib/extra')
cmd({
    pattern: "trt",
    react: "📚",
    alias: ["translate"],
    desc: "To translate quoted Text",
    category: "main",
    use: '.trt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !m.quoted ) return reply('*ℹ Please mention a text to Translate*')
if ( !q ) return reply('ℹ *Please add targeted Language code after the Command*')
const trt = await translate( m.quoted.msg , {to: q })
reply(`🌎 *Text translated to ${q} Language*\n\n${trt}\n\n*ᴛʀᴀɴꜱʟᴀᴛᴇᴅ ꜰʀᴏᴍ - translate.google.com*\n*ᴛᴀɪꜰᴜʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ • ᴠᴏʟ - ɪɪ*`)
} catch (e) {
reply(e)
}

})

cmd({
    pattern: "tomp3",
    react: "🔉",
    alias: ["toaud"],
    desc: "To convert quoted mp4 to mp3",
    category: "extra",
    use: '.tomp4 [ With quoted Media file ]',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, mime ,isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !m.quoted ) return reply('*ℹ Please quote a Media file*')
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`❌ *Unsupported file type ! Please check the Media File*`)
reply("🔄 *Processing converter please wait....*")
let media = await conn.downloadAndSaveMediaMessage(quoted)
let audio = await toAudio(media, 'mp4')
await conn.sendMessage(from, {document: audio, mimetype: 'audio/mp3', fileName: `Converted By TAIFUR-X .mp3`}, { quoted : mek })
} catch (e) {
reply(e)
}

})  

cmd({
    pattern: "toimg",
    react: "🔁",
    alias: ["toimage"],
    desc: "Sticker to image Converter",
    category: "extra",
    use: '.toimg',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q,mime , isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{


if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply("🔁 *Converting Please wait....*")
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(from, { image: buffer }, { quoted: mek })
fs.unlinkSync(ran)
})
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})


cmd({
    pattern: "wamods",
    react: "🪀",
    alias: ["fmmods", "fmmod"],
    desc: "Fouad Mod downloader",
    category: "download",
    use: '.wamods',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const fouad = `\n🪀 *TAIFUR-X  Fouad-WA Official Mods Downloader*

Download FMWA latest version apk from here... Powered By original FM Mods site: We are not responsible if your account gets banned using this mod.

────────────────────────

🔢 *ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ ᴛʏᴘᴇ*

  │1.1 - Fouad WhatsApp : com.whatsapp
  │1.2 - FM WhatsApp : com.fmwhatsapp
  │1.3 - GB WhatsApp : com.gbwhatsapp
  │1.4 - YO WhatsApp : com.yowhatsapp

ᴛᴀɪꜰᴜʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ
ᴍᴏᴅᴇᴅ ʙʏ - fmmods.com`
reply(fouad)
} catch (e) {
reply(e)
}

})

cmd({
    pattern: "soundcloud",
    react: "🔎",
    alias: ["scloud"],
    desc: "Soundcloud Downloader",
    category: "download",
    use: '.soundcloud < Query >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply('ℹ *Please enter Facebook Media Link*')
const data = await fg.scsearch(q)
const anu = data[0]
let deka =`\n*TAIFUR-X  Soundcloud MP3 Downloader* 📥

*🎶 Title : ${anu.title}*

📺 Views : ${anu.views}

⏱️ Duration : ${anu.duration} seconds

📽️ Artist : ${anu.artist}

🖇️ Link : ${anu.url}

ᴛᴀɪꜰᴜʀ-x ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ • ɪɪ
ᴅᴀʀᴋᴀʟᴘʜᴀxᴛᴇᴀᴍ ᴏꜰꜰɪᴄɪᴀʟ`
await conn.sendMessage(from, { image: { url : anu.thumb } , caption: deka }, { quoted: mek })
 let songdata = await fg.soundcloudDl2(anu.url)
 await conn.sendMessage(from, { audio: { url : songdata.dl_url }   , mimetype: 'audio/mpeg', fileName:  `${songdata.title}.mp3` }, { quoted: mek })
} catch (e) {
reply(e)
}

})