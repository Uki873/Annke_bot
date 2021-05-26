
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;



    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});
//Responde a menções 
client.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  let member = message.mentions.members.first();
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "seta_red");
  if (member)
    if (member.id == `${client.user.id}`)
      message.channel.send(
        `> Olá **${message.author.username}**, Esta precisando de ajuda? \n  ${emoji} Utilize: ${config.prefix}.ajuda`
      );
});


//Aqui sempre que ele liga mostra no conole os servidores!
client.on('ready', () => {
  client.guilds.cache.map(x => {
    console.log(`Nome: ${x.name}`);
  });
});

//Mudança de status

client.on("ready", () => {
  let activities = [
      
      `Utilize ${config.prefix}ajuda para ver meus comandos ^^`,
      `Café para todo o mundo ☕️ !`,
      `Caféteria coffe is good`,
      `Na noite passada 💞 `
      
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
     type: "STREAMING", url: "https://www.twitch.tv/neuker3"
      }), 10000); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});
client.login('token do seu bot'); 

