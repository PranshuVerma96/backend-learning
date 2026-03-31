import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  if(message.content.startsWith('create')){
    const url = message.content.split("create")[1];
    return message.reply({
      content : "Generating Short Id for " + url
    })
  }

  message.reply({
    content : 'Hi from bot'
  })
  console.log(message.content);
});

client.on('interactionCreate' , (interaction)=>{
  console.log(interaction);
  interaction.reply('Pong');
  
})


client.login(
  "MTQ4ODQ5NDIzNjg2MDE1Mzg4OA.GKW7Nf.5Evk7LO8MYGzplRHaPAcf4lqS0gosVVgQBwYZs",
);
