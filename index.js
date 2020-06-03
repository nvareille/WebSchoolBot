const Discord = require('discord.js');
const Requests = require('./Requests');
const client = new Discord.Client();

const chatArray =
[
	"https://media.giphy.com/media/MCfhrrNN1goH6/giphy.gif",
	"https://media.giphy.com/media/q1MeAPDDMb43K/giphy.gif",
	"https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif",
	"https://media.giphy.com/media/1HKaikaFqDt7i/giphy.gif"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
  //console.log(msg);
  
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  
  if (msg.content === 'chat') {
    msg.channel.send(chatArray[getRandomInt(chatArray.length - 1)]);
	
	new MessageAttachment()
  }
  
  let a =
  [
	[
		msg.content,
		msg.author.username,
		new Date().toString()
	]
  ]
  
  Requests.Insert(a);
  
});

client.login(process.env.discord_token);

