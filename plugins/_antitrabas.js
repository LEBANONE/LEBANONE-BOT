//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "393271166550-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'YUNA-MD', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `سيد/ة @${m.sender.split("@")[0]} لقد أرسلت للتو نصًا يحتوي على العديد من الأحرف -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] تم اكتشاف رسالة تحتوي على العديد من الأحرف [ ! ]*\n`, `${isBotAdmin ? '' : 'أنا لست مشرفًا ، ولا يمكنني فعل أي شيء :/'}`, author, ['[ قم بتعطيل مانع القفل ]', usedPrefix+'قم بإيقاف تشغيل مانع القفل'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `اجعل الدردشة مقروءة ✓\n${"\n".repeat(400)}\n=> الرقم : wa.me/${m.sender.split("@")[0]}\n=> اسم مستعار : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] لتنفيذ إجراءات الإزالة ، يجب على المالك تشغيل الوضع المقيد!')
    }
    return !0
}
