import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${lenguajeGB['smsAvisoMG']()}πππππππΏππ πΌ ππ πππΏππ π πΌππΏππ ππΌππΌ πΎππππππππ πΌ ππππΌ πΏπ πππ\n\nπππππ ππ πΌ πππΏππ ππ πΌππΏππ ππ πΎππππππ ππ πΌ ππππΎπ ππππ`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππππ πΏπππΎπΌπππΌπ ππ πππΏππ, πππππππ πππππΌπππππ πππ ππΌπππ\n\nπππΌπ½ππ ππ πΏππππππΌπΏ πππ πππΏππ, πππ πΌππΌππ ππππΌππ`
if (!media && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππππ πΏπππΎπΌπππΌπ ππ πΌππΏππ, πππππππ πππππΌπππππ πππ ππΌπππ\n\nπππΌπ½ππ ππ πΏππππππΌπΏ πππ πΌππΏππ, πππ πΌππΌππ ππππΌππ`
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππππ πΎππππππππ πΏπ πΌππΏππ πΌ ππππΌ πΏπ πππ, πππππππ πππππΌπππππ πππ ππΌπππ\n\nπΎππππΏ πππ πΎππππππ ππππ πΌππΏππ ππ ππππΎπ ππππ, ππππΌππ πππ πΌππΌππ`
if (!audio.data && !/video/.test(mime)) throw `${lenguajeGB['smsAvisoFG']()}ππ ππ πππππ πΎππππππππ πΏπ πππΏππ πΌ ππππΌ πΏπ πππ, πππππππ πππππΌπππππ πππ ππΌπππ\n\nπΎππππΏ πππ πΎππππππ ππππ πππΏππ ππ ππππΎπ ππππ, ππππΌππ πππ πΌππΌππ`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^tovn|vn|ptt$/i
export default handler
