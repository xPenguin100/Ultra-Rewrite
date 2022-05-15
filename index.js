const { Client, MessageEmbed, Collection, Discord, discord, cmd } = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Client({ intents: 32767 });
const fs = require ('fs');
client.commands = new Collection();
client.setMaxListeners(100)
const mongoose = require('mongoose')

fs.readdirSync('./commands/').forEach(dir => {

  const commands = [];
  const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
      const command = require(`./commands/${dir}/${file}`);
      client.commands.set(command.name, command);
  }
  })

client.once('ready', () => {
  client.user.setActivity(`dsc.gg/ultraa | ?help`, { type: 'WATCHING' });
	console.log('Ready!');
});


client.on('guildMemberAdd', (member) => {
  let channelid = '926227791744217138' 
  let message = `Welcome ${member}! We hope you have a good stay.`
  let channel = member.guild.channels.cache.get(channelid)
  channel.send(message)
})


//client.on('messageCreate', async (message) => {
 // if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
  //  const info = db.get(`afk-${message.author.id}+${message.guild.id}`, reason)
  //  await db.delete(`afk-${message.author.id}+${message.guild.id}`, reason)
  //  message.reply(`Your afk status have been removed (${info})`)
//}
//checking for mentions
//if(message.mentions.members.first()) {
    //if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
    //    message.channel.send(message.mentions.members.first().user.tag + ":" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
   // }else return;
//}else;
//})

client.on('messageCreate', async (message) => {
  if (
    message.content.toLowerCase().startsWith(prefix + 'clear') ||
    message.content.toLowerCase().startsWith(prefix + 'purge') 
  ) {
    if (!message.member.permissions.has('MANAGE_MESSAGES'))
      return message.channel.send("You can't use this command since you're missing the `MANAGE_MESSAGES` permission.");
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
      const embed = new MessageEmbed()
      .setTitle("**Purge Help**")
      .setColor(`#2F3136`)
      .setDescription('This array of commands allows fast deletion of messages. Below lists all commands in the array:\n\n**Commands:**\n`?purge <number>`\n`?clear <number>`')
      .setTimestamp()
      .setFooter({ text: `Requested By: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
      message.channel.send({ embeds: [embed] });
    }
  }
});

client.on('messageCreate', message => {
  if(message.content === '?clientservers') {
    let servers = client.guilds.cache.map(g=> `${g.name} | ${g.memberCount}`).join('\n')
    message.reply(`Client Guilds: \n${servers}`)
  }
})

client.on('messageCreate', message => {
  if (message.content.includes(`?nickname`)) {
  if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
  message.member.setNickname(message.content.replace('%nickname ', ''));
}
});

//CALLING FILES

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
if (command === 'approve') {
  client.commands.get('approve').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'deny') {
  client.commands.get('deny').run(client, message, args);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'timeout') {
  client.commands.get('timeout').run(message, args);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'consider') {
  client.commands.get('consider').run(client, message, args);
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
  client.commands.get('aww').run(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'announce') {
  client.commands.get('announce').run(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'afk-beta') {
  client.commands.get('afk-beta').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'createrole-beta') {
  client.commands.get('createrole-beta').run(message, args);
  }
});


client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'mute') {
  client.commands.get('mute').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'staffkick-beta') {
  client.commands.get('staffkick-beta').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'tempban') {
  client.commands.get('tempban').run(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'reportbug') {
  client.commands.get('reportbug').run(client, message, args);
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
if (command === 'warnings') {
  client.commands.get('warnings').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'report') {
  client.commands.get('report').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'clearwarns') {
  client.commands.get('clearwarns').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'feedback') {
  client.commands.get('feedback').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'wallpaper') {
  client.commands.get('wallpaper').run(message);
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
if (command === 'membercount') {
  client.commands.get('membercount').execute(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'unscramble') {
  client.commands.get('unscramble').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'remind') {
  client.commands.get('remind').execute(message, args, client, Discord);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'unban') {
  client.commands.get('unban').run(message, args);
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
if (command === 'achieve') {
  client.commands.get('achieve').run(message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'howgay') {
  client.commands.get('howgay').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'help-copy') {
  client.commands.get('help-copy').execute(message);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'say') {
  client.commands.get('say').run(client, message, args);
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
if (command === 'mod-notes') {
  client.commands.get('mod-notes').run(message, args);
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
if (command === 'rps') {
  client.commands.get('rps').run(message);
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
  client.commands.get('corona').run(message, args);
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
if (command === 'dm') {
  client.commands.get('dm').run(client, message, args);
  }
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
if (command === 'gstart') {
  client.commands.get('gstart').run(client, message);
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

      client.on('messageCreate', message => {
	    if (message.content === `ping`) {
	  	message.reply(`Ping: ${client.ws.ping}\nAPI Ping: ${Math.round(client.ws.ping)}ms`);
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

//mongoose connecting
const mongooseConnectionString = require('./config.json').mongooseConnectionString;
if(!mongooseConnectionString) console.log("Mongoose Connection Key - Error Connecting")
mongoose
    .connect(mongooseConnectionString, {
      useUnifiedTopology: true,
      useNewURLParser: true,
    })
    .then(() => console.log('Connected to MongoDB'))

client.login(token);