const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk1MjcxMDgxOTAwMTE0MDEw.XoXwPw.3D7XY1GnEMU9Sqo76fHD7AqBBmU';

bot.on('ready',() => {
    console.log('DANK PUA IS ALIVE');
})

bot.on('message', msg=>{
    if (msg.content === "VINSON"){
        msg.reply('VINSON BAUK EEEK')
    }
    if (msg.content === "hi"){
        msg.reply('EEK MU BAU VINSON')
    }
    if (msg.content === "dankpua"){
        msg.reply('DANK PUA SO PRO')
    }
    if (msg.content === "done"){
        msg.reply('PUA UDAH SELESAI MAKAN')
    }
})

bot.login(token);

