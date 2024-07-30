const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const fs=require('fs')
const fg = require('api-dylux')

cmd({
    pattern: "vidtest",
    react: "🔎",
    alias: ["xviddl"],
    desc: "XvidVideo downloader",
    category: "download",
    use: '.xvid ',
    dontAddCommandList : true ,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !q ) return reply('ℹ *Please enter Title for Search*')
const xnxxdata = await fg.xvideosSearch(q)
let lastdata = await fg.xvideosdl(xnxxdata[0].url)
console.log(lastdata)
} catch (e) {
reply(e)
}

})


