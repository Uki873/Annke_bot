const Discord = require('discord.js')
const config = require('../config.json')

exports.run = async(bot, message, args) => { 

    let avatar = message.author.displayAvatarURL({format: 'png'});
const embed = new Discord.MessageEmbed()
   .setAuthor('Alone™ -2.0.0A', 'https://images-ext-2.discordapp.net/external/AF4HkhT5ipvq7wNll6GkfRqbt6HY0Q4nrjxO9mjDRF8/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/778636554386145331/adb03a20a79a238980dd396c4218ed12.webp?width=395&height=395')
   .setColor('#63a7ff')
    .setDescription(`Olá **${message.author.username}**, meu prefixo neste servidor **\`\`${message.guild.name}\`\`** é: **${config.prefix}** . Este é minha **central de comandos**, abaixo você poderá ver todos meus comandos, **separados por categorias**.`)
   
    .setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.png?size=2048`)
    .addField("**:hammer:➤  Comandos Moderação**", "**``/warn`` ``/listban`` ``/caifora`` ``/ban`` ``/kick`` ``/mute`` ``/unmute``**")
    .addField("**:dizzy:➤  Comandos Úteis**", "**``/anuncio`` ``/enquete`` ``/sorteio`` ``/lock`` ``/unlock`` ``/slowmode`` ``/criar_canal`` ``/clear`` ``info`` ** ``ping`` **``uptime``**")

    
    .setTimestamp()
    .setFooter(message.author.tag, avatar);

    message.channel.send(embed);
}
