const fs = require('fs');
const { client, MessageEmbed, Collection } = require("discord.js");
const { token, prefix } = require('./config.json');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
  client.user.setActivity('Spotify', { type: 'LISTENING' });
	console.log('Ready!');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  if (command === 'test') {
    client.commands.get('test').execute(client, message, args);
    }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'invite') {
  client.commands.get('invite').execute(client, message, args);
  }
});


client.on('messageCreate', message => {
    if(message.content === "Hi")
  message.reply("Hello! How are you?")
});

client.on('messageCreate', message => {
	if (message.content === `${prefix}ping`) {
		message.reply(`${client.ws.ping}`);
	} else if (message.content === `beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `server`) {
		message.reply(`This server\'s name is: ${message.guild.name}`)
	}
});

client.login(token);