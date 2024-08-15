const config = require('../config')
const scraper = require('@bochilteam/scraper')
const fg = require('api-dylux')
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
 if ( !q.includes('instagram') ) return reply('❌ *Please enter Valid Instagram Video Url*')
 const insta = await fetchJson(`https://vihangayt.me/download/instagram?url=${q}`)
 if ( insta.data.data[0].type == "video" ) {
return await conn.sendMessage(from, { video: {url: insta.data.data[0].url }  }, { quoted: mek })  
}
 if ( insta.data.data[0].type == "image" ) {
return await conn.sendMessage(from, { image: { url : insta.data.data[0].url }  }, { quoted: mek })
}
 } catch (e) {
reply('*Error !!*\n\n' + e )
l(e)
}
})
