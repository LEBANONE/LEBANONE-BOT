let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let a = []
let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `${mg}πππ ππ πΎπππΌππΏπ πΏπ ππΌ πππππππππ πππππΌ\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\nπππ πππ πΎππππΌππΏ πΌπ πππππππ\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m) 
if (!b[1]) return conn.reply(m.chat, `${mg}ππΌππΌ πΎπππΌπ πππΎπππππ ππ ππΌ πππΎπππππΌ πππ *" | "*\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\nππ πΎπππΌππ πππππππ ππ πππ ππππππ πππ *" | "*\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)
if (b[13]) return conn.reply(m.chat, `${fg}ππΌππππ *12* πππΎπππππ!!\n\nπππ ππ πΎπππΌππΏπ πΏπ ππΌ πππππππππ πππππΌ\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\nππΌπππππ *12* πππππππ!!\n\nπππ πππ πΎππππΌππΏ πΌπ πππππππ\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `π πππΎπππππΌ πΎπππΌπΏπΌ πππ\n*β€οΈβ’ ${conn.getName(m.sender)}*\n*${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
