let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 sewa Bot 〙 ═
╠➥ *1 Minggu* :     *Rp 10.000*
╠➥ *1 Bulan* :      *Rp 15.000*
╠➥ *2 Bulan* :      *Rp 25.000*
╠➥ *Permanen* : *Rp 30.000*
╠➥ *Sewa bot* : *hubungi owner jika filtur ini eror*
╠➥ *Nomer Gopay & pulsa* : 
║    083117436733
╠═〘 PEMBAYARAN 〙 ═
╠➥ Dana Dan Pulsa
║  
╠═ Hanya bisa menyewa tidak menjual Bot
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 BLZXB DVT
╠═ Scrip original by Nurutomo
╠═〘 BLZXB5 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
