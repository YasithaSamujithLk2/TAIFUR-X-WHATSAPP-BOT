const config = require('../config')
const scraper = require('@bochilteam/scraper')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "ig",
    alias: ["insta","instagram"],
    react: '🎀',
    desc: "Download instagram videos/photos.",
    category: "download",
    use: '.ig <Instagram link>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if (!q) return reply('*Please give me a Instagram Url !!*')
 if ( q.includes('reel/') ) {
 const insta = await scraper.instagramdl(q)
 const capy =`*TAIFUR-X INSTAGRAM REELS DOWNLOADER* 📥
 
 🎬 *Title -: ${insta.title}*
  
 ℹ️Source -: ${insta.source}
  
 ⏲ Duration -: ${insta.duration}
  
 📂 Size -: ${insta.medias[0].formattedSize}B ( ${insta.medias[0].quality} )
  
*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`
await conn.sendMessage(from, { image: { url : insta.thumbnail } , caption: capy }, { quoted: mek })
return await conn.sendMessage(from, { video: {url: insta.medias[0].url }, caption: insta.title }, { quoted: mek })  

 }
 if ( q.includes('stories/')) {
const insta = await scraper.instagramStory(q)
console.log(insta)
 }

 
 } catch (e) {
reply('*Error !!*\n\n' + e )
l(e)
}
})