const { MessageEmbed, Discord } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'server',
    description: 'User info command',
    execute(message) {
  
  
      const author = message.mentions.users.first() || message.author
      const member = message.mentions.members.first() || message.member
      let avatar = author.displayAvatarURL({size: 4096, dynamic: true});
  
      let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
    .setTitle('Server Info')
    .setDescription(`Hello ${message.author.tag}, you requested to see the latest info on this server. They are found below!`)
    .addFields(
      { name: 'Name', value: (`${author.username}`), inline: true},
      { name: 'Nickname', value: (`${member.displayName}`), inline: true},
      { name: 'ID', value: (`${author.id}`), inline: true},
      { name: 'Status', value: (`${message.member.presence.status}`), inline: true},
      { name: 'Server', value: (`${message.guild.name}`), inline: true},
      { name: 'Bot', value: (`${author.bot}`), inline: true},
      { name: 'Joined Server', value: (`${moment.utc(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`)},
      { name: 'Joined Discord', value: (`${moment.utc(author.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`)}
    )
    .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
    .setTimestamp()
    .setColor('#2F3136')
    //.setDescription('❌ Command is down for maintenance.')
      message.channel.send({ embeds: [embed] });
    }
  }