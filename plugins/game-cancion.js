/* Created By https://github.com/unptoadrih15 */

import fetch from 'node-fetch'
let timeout = 60000
let poin = 1000
let handler = async (m, { conn, usedPrefix }) => {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
let id = m.chat
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'π»πππππΜπ πππ πππππππππ πππ ππππππππππ ππ ππππ ππππ.', conn.tebaklagu[id][0])
throw false
}
let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '5LTV57azwaid7dXfz5fzJu' }, 'APIKEY'))
if (res.status !== 200) throw await res.text()
let result = await res.json()
let json = result.result
let caption = `
Adivinar el titulo del la canciΓ³n
tiempos: ${(timeout / 1000).toFixed(2)} segundos
escribi: *${usedPrefix}pista* para obtener una pista
premio: ${poin} XP
Responde a este mensaje con la respuesta!`.trim()
conn.tebaklagu[id] = [
await m.reply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `se acabo el tiempo!\nla respuestas es ${json.judul}`, conn.tebaklagu[id][0])
delete conn.tebaklagu[id]
}, timeout)
]
await conn.sendFile(m.chat, json.preview, 'coba-lagi.mp3', '', m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^cancion|canciΓ³n$/i
export default handler