const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const { ChatGpt } = require('chatgpt-scraper')
const { openai } = require('betabotz-tools') 

cmd({
    pattern: "gpt",
    react: "🧠",
    alias: ["chatgpt","cyber_gpt"],
    desc: "Open-AI chatGpt Chat",
    category: "extra",
    use: '.gpt',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
if (!q) return reply('🖊️ *Please write a Question for me*')
const res = await openai(q)
console.log(res)
/* const aim = await conn.sendMessage(from , { text: '*Result from ChatGPT openAi Module* \n\n' + res.data }, { quoted: mek } )
await conn.sendMessage(from, { react: { text: `🧠`, key: aim.key }})
*/
} catch (e) {
reply('⛔ *Error accurated !!*\n\n'+ e )
l(e)
}
})