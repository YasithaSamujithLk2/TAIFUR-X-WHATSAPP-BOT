const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { DBM } = require('postgres_dbm')

cmd({
    pattern: "get",
    react: "🥏",
    alias: ["check"],
    desc: "Get Added Variables",
    category: "main",
    use: '.get ALIVE_MESSAGE',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
		if(!isCreator) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is Moderator only command*"},{quoted:mek }) }
		const db_pool = new DBM({
    db: config.DATABASE_URL
})
		const data = await db_pool.get(q)
			await conn.sendMessage(from,{text: data },{quoted:mek })
	
} catch (e) {
reply('❗ *No added Data in Database*')
l(e)
}
})

cmd({
    pattern: "setup",
    react: "⚙",
    alias: ["set"],
    desc: "TAIFUR-X Database Tools",
    category: "main",
    use: '.setup ALIVE_MESSAGE=Hi',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if(!isCreator) { if ( !isDev) return conn.sendMessage(from,{text:"🚫 *This is Moderator only Command*"},{quoted:mek }) }
if ( !q ) return reply('🧑‍💻  *Please add Valid Database Var with Text*  ❗\n\n📌 Ex -: ```.setup ALIVE_MESSAGE=Hii How Are you Im Alive```\n\n⚠️ *Dont add space befor and after the "=" Symbol*')
if (q.split('=')[0].endsWith(' ')) return reply('🚫 *Dont Add space After the "=" Symbol*')
if (q.split('=')[1].startsWith(' ')) return  reply('🚫 *Dont add Space before the "=" Symbol*')
const icon = q.split("=")[0] 
const data = q.split("=")[1] 
if ( !icon && !data ) reply('🚫 *Sorry ... Text in Error ! Please Add Valid Database Updating Message*')
		const db_pool = new DBM({
    db: config.DATABASE_URL
})
		await db_pool.insert( icon , data )
			await conn.sendMessage(from,{text: "*Database*  ```" + icon + "```  *Updated ✔️*"},{quoted:mek })
	
} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})


cmd({
    pattern: "setuplist",
    react: "⚙",
    alias: ["listsetup"],
    desc: "TAIFUR-X Database Tools List",
    category: "main",
    use: '.setuplist',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, mentionByTag, db_pool, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const listeka ="🧑‍💻 *TAIFUR-X 2.0 DATABASE SETUP LIST*\n\n📍 ```ALIVE_IMAGE``` - Add direct link of Image \n\n📍 ```ALIVE_MESSAGE``` - Add your Alive message \n\n📍 ```OWNER_NUMBER``` - Add your Mobile Number \n\n📍 ```OWNER_NAME``` - Add your Name ( Bot Owner )\n\n📍 ```S_PACK_NAME``` - Add a pack name for Bot made Stickers\n\n📍 ```S_OWNER_NAME``` - Add a owner name for Bot made Stickers\n\n📍 ```OPENAI_KEY``` - Add Your OpenAI Key\n\n❗ *Instructions for Using Database Commands*\n\nEx -: ```.setup ALIVE_MESSAGE=Hii How Are you Im Alive```\n\n⚠️ *Dont Add space After the '=' Symbol*\n⚠️ *Dont Add space before the '=' Symbol*\n\n*ᴛᴀɪꜰᴜʀ-x ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠᴏʟ-ɪɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀɪꜰᴜʀ X ʟᴜᴄɪꜰᴇʀ ᴏꜰᴄ*"

await conn.sendMessage(from,{text: listeka },{quoted:mek })

} catch (e) {
reply('🚫 *Error Accurated !!*\n\n' + e )
l(e)
}
})
