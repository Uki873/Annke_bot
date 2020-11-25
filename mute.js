//Obs: Sim vc pode mudar o nome do cargo 🔇 | barman Muted para algum que vc queira, mas é necessario que crie o cargo no servidor, caso não tenha o bot não vai conseguir mutar




const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Desculpe, mas você não tem permissão para silenciar ninguém"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Eu não tenho permissão para gerenciar funções.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return message.channel.send("Mencione o membro para quem deseja silenciar")
    }
    
    if(user.id === message.author.id) {
      return message.channel.send("Não vou silenciar você -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Por favor, dê o motivo para silenciar o membro")
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "🔇 | barman Muted")
    
    
      if(!muterole) {
      return message.channel.send("Este servidor não tem função com nome `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("O usuário fornecido já está silenciado")
    }
    
  
    
    
    user.roles.add(muterole)
    
await message.channel.send(`Você silenciou **${message.mentions.users.first().username}** por \`${reason}\``)
    
    user.send(`Você está mudo em**${message.guild.name}** por \`${reason}\``)
    
    
//WE ARE DONE HERE 
    
  }
};
