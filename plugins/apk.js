const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { search , download } = require('aptoide-scraper')

cmd({
    pattern: "ps",
    react: "📚",
    alias: ["apksh","playstore"],
    desc: "Play Store Apk Searcher",
    category: "search",
    use: '.apk < App Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('*Please enter a App name* 📱')
const vid = await search(q)
    let yt = '*Taifur-X 2.0 Play Store Search ( Google Play )*\n\n'
    for (let i of vid ) {
        yt += `📱 *${i.name}*\n🔗 Link : https://play.google.com/store/apps/details?id=${i.id} \n\n`
    }
reply(yt)
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})

cmd({
    pattern: "apk",
    react: "📱",
    alias: ["apkdl","Taifur_apk"],
    desc: "Apk Downloader",
    category: "download",
    use: '.apk < App Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !q ) return reply('*Please enter a App name* 📱')
if ( isUrl(q) ) {
if ( q.includes('https://play.google.com') ) {
const getlink = q.split("?id=")[1]
const app = await download(getlink)
let msgg =`*TAIFUR-X APK DOWNLOADER* 📱

📚 *App name -: ${app.name}*

📂 Size -: ${app.size}

─────────────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ɢᴇᴛ ʏᴏᴜʀ ɴᴇᴇᴅ*

1 📂 *APK File*
2 ℹ *APK Details*

ᴛᴀɪꜰᴜʀ-x ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ᴀᴘᴘ ɪᴅ - ${app.package}`
return reply(msgg)


}
}
let getdata = await search(q)
const app = await download(getdata[0].id)
let msgg =`*TAIFUR-X APK DOWNLOADER* 📱

📚 *App name -: ${app.name}*

📂 Size -: ${app.size}

─────────────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ɢᴇᴛ ʏᴏᴜʀ ɴᴇᴇᴅ*

1 📂 *APK File*
2 ℹ *APK Details*

ᴛᴀɪꜰᴜʀ-x ᴀᴘᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ᴀᴘᴘ ɪᴅ - ${app.package}`
 reply(msgg)
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})
