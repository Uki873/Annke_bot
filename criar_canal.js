const Discord = require("discord.js");

exports.run = async (client,message,args) => {

    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(':x: | Você não tem permissão para usar esse comando.'); 
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: | Eu não tenho permissão para fazer isso!");
    let prefix = args [0];
    if(!args[0]) {
        return message.channel.send(`**${message.author.username}** utilize esse comando assim: \`\`A!criar_canal <voice ou text> <nome do canal>\`\``)
    }
    if(!args[1]) return message.channel.send(`**${message.author.username}** Digite o nome do canal que você quer.`); 
    message.guild.channels.create(args.slice(1).join(" "), {type: `${prefix}`}) //voice text
 message.channel.send(`:white_check_mark: **|** **${message.author.username}** Canal criado com sucesso!`);
}
