const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const translate = require('translate-google')

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
