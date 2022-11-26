let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
// المسح التلقائي عند وجود رسالة لا يمكن رؤيتها على سطح المكتب | السيارات واضحة ketika terdapat وزن يانغ tidak dapat dilihat di wa desktop 
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}}
export default handler
