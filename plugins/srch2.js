const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { googleImage } = require('@bochilteam/scraper-images')

cmd({
    pattern: "img",
    react: "🔎",
    alias: ["gimages","image"],
    desc: "To Get images from  Google",
    category: "download",
    use: '.img < Query > ',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('❓ *Please give me a title for Search Images*')
const data = await googleImage(q)
await conn.sendMessage(from, { image: { url : data[0] } }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[1] } }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[2] } }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[3] } }, { quoted: mek })
await conn.sendMessage(from, { image: { url : data[4] } }, { quoted: mek })
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})



cmd({
    pattern: "github",
    react: "🔎",
    alias: ["ghubuser","ghub"],
    desc: "To Search Github user Details",
    category: "search",
    use: '.github < userName > ',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('❓ *Please give me a Username*')
const duka = await fetchJson(`https://Itxtaifur.cyclic.app/api/other/github-stalk?username=${q}&apikey=darkalpha`)
 const pk = `\n❍⚯───────────────────⚯❍
   📑  *𝙶𝙸𝚃𝙷𝚄𝙱 𝚄𝚂𝙴𝚁 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽𝚂*  📑
    ⚡ *ᴛᴀɪꜰᴜʀ x ɢɪᴛʜᴜʙ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡
❍⚯───────────────────⚯❍

🪀. Account Name  - ${duka.result.user.name}
📃. Created Date - ${duka.result.user.createdAt}
⚒️. Updated Date - ${duka.result.user.updatedAt}
🖇️. Url - ${duka.result.user.githubUrl}
🔑. Username - ${duka.result.user.username}
🏵️. Bio - ${duka.result.user.bio}
👾. Followers - ${duka.result.user.followers}
🌺. Following - ${duka.result.user.following}
🚧. UserID -${duka.result.user.idUser}
🛴. Public Repose - ${duka.result.user.publicRepos}`

 await conn.sendMessage(from,{image:{url: duka.result.user.avatarUrl },caption: pk + "\n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*" },{quoted:mek })

} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})

cmd({
    pattern: "ps2",
    react: "🔎",
    alias: ["playstore2"],
    desc: "Search Apps and Details from PlayStore",
    category: "search",
    use: '.ps2',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please type a App name for search*')
const vid = await fetchJson(`https://api.akuari.my.id/search/playstoresearch?query=${q}`)
    let yt = '\n❍⚯────────────────────⚯❍\n       🎲  *𝙿𝙻𝙰𝚈𝚂𝚃𝙾𝚁𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽*  🎲\n  ⚡ *ᴛᴀɪꜰᴜʀ x ᴘʟᴀʏꜱᴛᴏʀᴇ ꜱᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
    for (let i of vid.hasil ) {
        yt += `🧮 *App Name - ${i.title}*\n📊 Developer : ${i.developer} \n🔗 _Link : ${i.url}_ \n\n\n`
    }
 await conn.sendMessage(from,{image:{url: vid.hasil[0].icon },caption: yt + "*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*" },{quoted:mek })
} catch (e) {
reply('⛔ *Error accurated !!*\n\n' + e )
l(e)
}
})
