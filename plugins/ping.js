const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')
const os = require("os")
const si = require('systeminformation')
cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging to Cyber Module..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '◍○○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍○○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍○○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍○' , edit : ping.key })
await conn.sendMessage(from, { text : '◍◍◍◍◍' , edit : ping.key })
return await conn.sendMessage(from, { text : '📍️ *Pong ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
