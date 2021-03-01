
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
client.login(process.env.TOKEN); 

