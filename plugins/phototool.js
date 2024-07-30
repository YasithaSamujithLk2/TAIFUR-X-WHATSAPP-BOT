const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const api = require("caliph-api")
let { img2url } = require('@blackamda/telegram-image-url')
const fs = require('fs')
const fg = require('api-dylux')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter') 
const { removebg , toanime , tozombie , remini } = require('betabotz-tools') 

cmd({
    pattern: "removebg",
    react: "",
    alias: ["rbg"],
    desc: "Img Background remover",
    category: "edit",
    use: '.removebg',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await removebg(imgURL)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: { url : poto.image_data } , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "toanime",
    react: "",
    alias: ["toanm"],
    desc: "Image to Anims",
    category: "edit",
    use: '.toanime',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await toanime(imgURL)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: { url : poto.image_data } , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "tozombie",
    react: "",
    alias: ["tozmb"],
    desc: "Image to zombie",
    category: "edit",
    use: '.tozombie',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await tozombie(imgURL)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: { url : poto.image_data } , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "remini",
    react: "",
    alias: ["toremini"],
    desc: "Image to remini",
    category: "edit",
    use: '.remini',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await remini(imgURL)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: { url : poto.image_data } , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "colorize",
    react: "",
    alias: ["tocolorize"],
    desc: "Image to colorize ",
    category: "edit",
    use: '.colorize',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/tools/colorize?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "dehaze",
    react: "",
    alias: ["todehaze"],
    desc: "Image to dehaze",
    category: "edit",
    use: '.dehaze',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/tools/dehaze?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "blur",
    react: "",
    alias: ["toblur"],
    desc: "Image to blur",
    category: "edit",
    use: '.blur',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/blur?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "dark",
    react: "",
    alias: ["todark"],
    desc: "Image to dark",
    category: "edit",
    use: '.dark',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/darkness?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "invert",
    react: "",
    alias: ["toinvert"],
    desc: "Image to invert",
    category: "edit",
    use: '.invert',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/invert?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "rainbow",
    react: "",
    alias: ["torandom"],
    desc: "Image to rainbow",
    category: "edit",
    use: '.rainbow',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/rainbow?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "wanted",
    react: "",
    alias: ["towanted"],
    desc: "Image to wanted",
    category: "edit",
    use: '.wanted',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/wanted?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "wasted",
    react: "",
    alias: ["towasted"],
    desc: "Image to wasted",
    category: "edit",
    use: '.wasted',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/wasted?url=${imgURL}`)
await fs.unlinkSync(media)
await conn.sendMessage(from, { image: poto , caption: "\n*Your image Done* ✔️" }, { quoted: mek })
}

} catch (e) {
reply(e)
l(e)
}
})

cmd({
    pattern: "trigger",
    react: "",
    alias: ["totrigger"],
    desc: "Image to trigger",
    category: "edit",
    use: '.trigger',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body,mime , isCmd, command , args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!quoted) return reply('❗ *Please Reply a Image to Continue* ')
 if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
reply('🕛 *Processing ! Please wait....*')
const imgURL = await img2url(media)
const poto = await getBuffer(`https://vihangayt.me/maker/trigger?url=${imgURL}`)
await fs.unlinkSync(media)
const sticker = new Sticker(poto , {
    pack: "Created by TAIFUR-X " , // The pack name
    author: "Second edition" , // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 50, // The quality of the output file
    background: 'transparent' // The sticker background color (only for full stickers)
})

const buffer = await sticker.toBuffer() // convert to buffer

await conn.sendMessage(from, { sticker : buffer  }, { quoted: mek })

}

} catch (e) {
reply(e)
l(e)
}
})