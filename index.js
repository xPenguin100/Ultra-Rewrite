const { emitter, message, Client, MessageSelectMenu, MessageActionRow, MessageButton, MessageEmbed, Intents, Collection, Discord, discord, cmd, ButtonInteraction } = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Client({ intents: 32767, ws: {properties: {$browser: 'Discord iOS'}} });
const fs = require ('fs');
client.commands = new Collection();
client.setMaxListeners(50)
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const ms =  require('ms')

fs.readdirSync('./commands/').forEach(dir => {

  const commands = [];
  const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
      const command = require(`./commands/${dir}/${file}`);
      client.commands.set(command.name, command);
  }
  })
  
client.on("messageCreate", message => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(client.user.id)) {
      message.channel.send("Hey! I am Ultra. My prefix is `?`, or you can use `?help` for help!");
  };
});


client.once('ready', () => {
  client.user.setActivity('dsc.gg/ultraa | ?help', { type: 'WATCHING' });
	console.log('Ready!');
});

client.on('messageCreate', async (message) => {
  if (
    message.content.toLowerCase().startsWith(prefix + 'clear') ||
    message.content.toLowerCase().startsWith(prefix + 'purge') 
  ) {
    if (!message.member.permissions.has('MANAGE_MESSAGES'))
      return message.channel.send("You can't use this command since you're missing the `manage_messages` permission.");
    if (!message.guild.me.permissions.has('MANAGE_MESSAGES'))
      return message.channel.send("I can't execute this command! I am missing the `MANAGE_MESSAGES` permission!")
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }
      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`:white_check_mark: \`${_message.size}\` messages were cleared.`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });
    } else {
      message.channel.send('Please enter the **amount of messages** that you would like to clear.').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    }
  } else {
    if (message.content.toLowerCase() === prefix + 'c.help') {
      const embed = new MessageEmbed().setColor('#2F3136').setTitle('**Clear Help**');
      newEmbed
        .setDescription('This command clears messages. For example, `?purge 5`, `?p 5`, `?clear 5`, or `?c 5`.')
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send({ embeds: [embed] });
    }
  }
});


client.on('messageCreate', message => {
  if (message.content.includes(`%nickname`)) {
  if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
  message.member.setNickname(message.content.replace('%nickname ', ''));
}
});

//CALLING FILES

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'embedtest') {
  client.commands.get('embedtest').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'warn') {
  client.commands.get('warn').run(client, message, args);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'ban') {
  client.commands.get('ban').execute(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'aww') {
  client.commands.get('aww').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'wallpaper') {
  client.commands.get('wallpaper').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'meme') {
  client.commands.get('meme').run(client, message, args);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'kick') {
  client.commands.get('kick').execute(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'lock') {
  client.commands.get('lock').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'unlock') {
  client.commands.get('unlock').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'unban') {
  client.commands.get('unban').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'modnick') {
  client.commands.get('modnick').run(client, message, args, prefix);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'invite') {
  client.commands.get('invite').run(message, args, client);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'prefix') {
  client.commands.get('prefix').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'vote') {
  client.commands.get('vote').run(message, args, client);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'channelinfo') {
  client.commands.get('channelinfo').execute(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'roleinfo') {
  client.commands.get('roleinfo').execute(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'suggest') {
  client.commands.get('suggest').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'recentupdate') {
  client.commands.get('recentupdate').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'stats') {
  client.commands.get('stats').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'ticket') {
  client.commands.get('ticket').execute(message, args, cmd, client, discord);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'metest') {
  client.commands.get('metest').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === '8ball') {
  client.commands.get('8ball').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'bot') {
  client.commands.get('bot').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'user') {
  client.commands.get('user').execute(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'server') {
  client.commands.get('server').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'approve') {
  client.commands.get('approve').execute(client, message, args, Discord);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'dadjoke') {
  client.commands.get('dadjoke').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'help') {
  client.commands.get('help').execute(message);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'avatar') {
  client.commands.get('avatar').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'ping') {
  client.commands.get('ping').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'corona') {
  client.commands.get('corona').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'gstarttest') {
  client.commands.get('gstarttest').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'buttontest') {
  client.commands.get('buttontest').run(message, args, client);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'lockdown') {
  client.commands.get('lockdown').run(message, args, client);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'lift-lockdown') {
  client.commands.get('lift-lockdown').run(message, args, client);
  }
});


//END OF CALLING FILES

client.on('messageCreate', message => { 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
  const command = args[0].slice(prefix.length).toLowerCase();
if(command === "slowmode") {
  if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send('I don\'t have permissions to set slowmode for this channel!');
  if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('You don\'t have permissions to set slowmode for this channel!');
if(!args[1]) return message.channel.send("Specify the length of slowmode in seconds! (1-21600 Seconds)")
let duration = args[1]
message.channel.setRateLimitPerUser(duration)
  .catch(() => {
message.channel.send("Failed to set slowmode in this channel, check your slowmode length.")
  })
message.channel.send("I have set the slowmode in this channel to " + duration + " seconds!")
}
});

client.on('messageCreate', async message => {

	if (message.content === '!dropdown') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		await message.reply({ content: 'Pong!', components: [row] });
	}
});

      client.on('messageCreate', message => {
	    if (message.content === `ping`) {
	  	message.reply(`${client.ws.ping}`);
	    } else if (message.content === `beep`) {
		message.channel.send('Boop.');
	    } else if (message.content === `?cosmicinfo`) {
        const cosmicembed = new MessageEmbed()
        .setColor(`2F3136`)
        .setTitle(`Cosmic Info`)
        .setDescription(`Name: Cosmic\nImage: Shown below`)
        .setImage(`https://cdn.discordapp.com/avatars/890734834811559948/640c54fc80f3b5618b180e0229772b35.jpg?size=4096`)
        .setFooter(`Only use if Cosmic will be a bot.`)
        message.reply({ embeds: [cosmicembed] })
      }
});

client.login(token);