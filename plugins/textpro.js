const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const mumaker = require("mumaker")

cmd({
    pattern: "naruto",
    react: "🏜️",
    alias: ["textpro1"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.naruto',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "rose",
    react: "🏜️",
    alias: ["textpro2"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.rose',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "cake",
    react: "🏜️",
    alias: ["textpro3"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.cake',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "pokn",
    react: "🏜️",
    alias: ["textpro4"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.pokn',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "liud",
    react: "🏜️",
    alias: ["textpro5"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.liud',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-liquid-metal-text-effect-1112.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "rusty",
    react: "🏜️",
    alias: ["textpro6"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.rusty',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "frid",
    react: "🏜️",
    alias: ["textpro7"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.frid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/neon-light-style-3d-text-effect-online-1132.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "pink",
    react: "🏜️",
    alias: ["textpro8"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.pink',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "drag",
    react: "🏜️",
    alias: ["textpro9"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.drag',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "sumr",
    react: "🏜️",
    alias: ["textpro10"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.sumr',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "cart",
    react: "🏜️",
    alias: ["textpro11"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.cart',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-cartoon-text-effect-online-1120.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "grun",
    react: "🏜️",
    alias: ["textpro12"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.grun',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "pain",
    react: "🏜️",
    alias: ["textpro13"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.pain',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "meta",
    react: "🏜️",
    alias: ["textpro14"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.meta',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/create-3d-metallic-text-with-details-online-1108.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})

cmd({
    pattern: "part",
    react: "🏜️",
    alias: ["textpro15"],
    desc: "Text to Image Collection",
    category: "text2img",
    use: '.part',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply("🏜️ *Text not found ! Please type a text to Make Art*")
const limk = "https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html"
const duka = await mumaker.textpro( limk , q )
await conn.sendMessage(from,{image:{url: duka.image },caption: `\n🗾 *Link - ${limk}* \n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*` },{quoted:mek })

} catch (e) {
reply('⛔ *Error !!*'+ e )
l(e)
}
})
