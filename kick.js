const Discord = require("discord.js");

exports.run = (client, message, [mention, ...reason]) => {
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("⚠️ Você não tem este poder!");    

    if (message.mentions.members.size === 0)
      return message.reply("⚠️ Você deve mencionar qual usuário ira levar Kick");    

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(`✔️ ${member.user.username} Foi expulso por não seguir as regras 🌀.`);
    });
  }; 
