const config = require('../config')
const fg = require('api-dylux')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "tiktok",
    react: "💃",
    alias: ["tik","tk"],
    desc: "Tiktok Video Downloader",
    category: "download",
    use: '.tiktok < Tiktok Url >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const data = await fg.tiktok(q)
const msgg =`
*TAIFUR-X TIKTOK DOWNLOADER* 📥

🖇️ *_Link -: ${q}_*

🧑‍🔧 User Name  -: ${data.unique_id}

⏲️ Duration -: ${data.duration}

📚 Description -: ${data.description}

──────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ ᴛʏᴘᴇ*

│ 🎥 *2.1 - Without Watermark*
│ 🎬 *2.2 - With Watermark*
│ 🎶 *2.3 - Audio Only*

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`

await conn.sendMessage(from, { image: { url : "https://telegra.ph/file/ad3f8fdd9a74e791c3c3f.jpg" } , caption: msgg }, { quoted: mek })

} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})
