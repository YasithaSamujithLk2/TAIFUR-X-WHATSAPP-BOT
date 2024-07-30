const config = require('../config')
const fg = require('api-dylux');
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "gdrive",
    alias: ["googledrive","gd","cyber_gd"],
    react: '📑',
    desc: "Download googledrive files.",
    category: "download",
    use: '.gdrive <googledrive link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if (!q) return reply('*Please give me googledrive url...!!*')   
let res = await fg.GDriveDl(q)
reply(`\n⬇️  *TAIFUR-X GDRIVE DOWNLOADER*  ⬇️

*📃 File name:*  ${res.fileName}
*💈 File Size:* ${res.fileSize}
*🕹️ File type:* ${res.mimetype}

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`)		
conn.sendMessage(from, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: mek })
} catch (e) {
reply('*Error..! Your Url is Private. Please Public It*')
l(e)
}
})
