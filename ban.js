
const Discord = require('discord.js');

exports.run = (bot,message,args) => {
	if (!args[0]) {
		message.channel.send("Especifique qual usuário deve ser banido! Ex: a.ban @Test#3333");
		return;
	} else if (!message.member.roles.cache.has('Annke Admin') && !message.member.hasPermission("BAN_MEMBERS")) {
		message.channel.send("Você não tem permissão para executar esse comando! ``` a.setadmin (Nick) ``` para dar permissão a um usuário!");
		return;
	}
	
    const user = message.mentions.users.first();
    const username = user.username;

    args.shift();
    args = args.join([separator = ' ']);

    if (user) message.guild.members.ban(user); else return;
    message.channel.send(`${username} banido por: <@${message.author.id}>\nMotivo: ${args}`);
}
