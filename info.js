
const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = (client, message, args) =>{
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let servers = client.guilds.cache.size;
    let users = client.users.cache.size;

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} Dias, ${hours} Horas, ${minutes} Minutos e ${seconds} segundos`;

    let serverembed = new Discord.MessageEmbed()
        .setColor("#60dd85")
        
        .setAuthor(`Barman de Café -1.0.9A`, client.user.displayAvatarURL)
        .addField(`:mega: | Versão:`,`1.9`, true)
        .addField(`📒 | Livraria:`,`Discord.js` , true)
        .addField(`:cyclone: | Criadores:`,`sonunzin_#2046`, true)
        .addField(`:ringed_planet: | Servers:`, `${servers}`, true)
        .addField(`👥 | Usuarios:`, `${users}`, true)
        .setImage("https://media.discordapp.net/attachments/766677248672530463/776069284887134228/unknown.png")
        .setFooter(`Uptime: ${uptime}`);

    message.channel.send(serverembed);    

}
