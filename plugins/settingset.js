const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "apply",
    react: "🧑‍🔧",
    alias: ["setapply"],
    desc: "TAIFUR-X User Configuration Tool",
    category: "main",
    use: '.apply',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isCreator ) { if (!isDev) return reply('ℹ️ *Sorry ! This is Owner only Command..*') }
if ( !m.quoted ) return reply('ℹ️ *Please reply the text with Number...*')
if ( m.quoted.msg.startsWith("0") ) return reply("ℹ️ *Please enter the Number International Stand without 0 & + Symbol*")
if ( m.quoted.msg  == botNumber2 ) return reply("❌ *You can't Change Bot Number's Permissions .*\n\n_1. Its Always Moderator and Inbox User_\n_2. You can't add it to Banned List_")
if ( m.quoted.msg  == '4593707292' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '92406234274' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '923056148789' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94787820101' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94715346004' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94784596431' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94729932436' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94785893102' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94762862143' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
if ( m.quoted.msg  == '94743386944' ) return reply("❌ *You can't use this Command for Developer Team* 😏🎩")
const [result] = await conn.onWhatsApp(m.quoted.msg)
if ( result.exists == true ) {
const teet =`\n🧑‍🔧 *TAIFUR-X User & Moderator Configuration* ⚙️

_You can add you mentioned Number as More Title.Temporary Places auto removing at next Restart time_

─────────────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜ ɴᴇᴇᴅ*

*│ 1.1 - Permanent Moderator*
*│ 1.2 - Permanent inbox Command User*
*│ 1.3 - Permanent Banned User*
*│ 1.4 - Temporary inbox Command User*
*│ 1.5 - Temporary Banned User*

ᴛᴀɪꜰᴜʀ-x ᴄᴏɴꜰɪɢᴜʀᴀᴛɪᴏɴ ᴛᴏᴏʟ
ᴛᴀʀɢᴇᴛ ɴᴜᴍʙᴇʀ - ${m.quoted.msg}`
reply(teet)
} else reply('❌ *Number not Available in WhatsApp*')
} catch (e) {
reply('❌ *Number not Available in WhatsApp*')
l(e)
}
})

cmd({
    pattern: "reset",
    react: "🔄",
    alias: ["resetapply"],
    desc: "TAIFUR-X Data reset Tool",
    category: "main",
    use: '.reset',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if ( !isCreator ) { if (!isDev) return reply('ℹ️ *Sorry ! This is Owner only Command..*') }
const teet =`\n🧑‍🔧 *TAIFUR-X WhatsApp Bot Database Reset Function* ⚙️

_Please enter a Number as a reply. When you Done Bot will automatically Restart._
─────────────────────────────
*ᴘʟᴇᴀꜱᴇ ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ꜰᴏʀ ʏᴏᴜ ɴᴇᴇᴅ*

│ 1.1 - Permanent Moderators
│ 1.2 - Permanent inbox Command Users
│ 1.3 - Permanent Banned Users
│ 1.4 - Temporary inbox Command Users
│ 1.5 - Temporary Banned Users
│ 1.6 - Alive message and image

*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*
*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*`
reply(teet)
} catch (e) {
reply('❌ *Number not Available in WhatsApp*')
l(e)
}
})