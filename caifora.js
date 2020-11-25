const Discord = require('discord.js');

exports.run = (bot,message,args) => {
	if (!args[0]) {
		message.channel.send("Especifique qual usuário deve Cair fora! Ex: A.caifora @Test#3333 + motivo");
		return;
	} else if (!message.member.roles.cache.has('Annke Admin') && !message.member.hasPermission("KICK_MEMBERS")) {
		message.channel.send(":x: | Vish, parece que você não tem permissão para executar esse comando!");
		return;
	}
	
   
    const user = message.mentions.users.first();
    const username = user.username;

    args.shift();
    args = args.join([separator = ' ']);

    if (user) message.guild.members.ban(user); else return;
    message.channel.send(`${username} caiu fora por: <@${message.author.id}>\nMotivo: ${args}`);
}
