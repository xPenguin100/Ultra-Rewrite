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
      { name: 'Server\'s Name', value: (`${message.guild.name}`)},
      { name: 'Owner', value: (`<@${message.guild.ownerId}> (${message.guild.ownerId})`)},
      { name: 'Server\'s ID', value: (`${message.guild.id}`)},
      { name: 'Region', value: (`${message.guild.preferredLocale}`)},
      { name: 'Member Count', value: (`${message.guild.memberCount}`)},
      { name: 'Boost Tier', value: (`\`${message.guild.premiumTier}\` (\`${message.guild.premiumSubscriptionCount}\`)`)},
      { name: 'Role Count', value: (`${message.guild.roles.cache.size}`)},
      { name: 'Emoji Count', value: (`${message.guild.emojis.cache.size}`)},
      { name: 'Created On', value: (`${moment.utc(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`)}
    )
    .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
    .setTimestamp()
    .setColor('#2F3136')
    //.setDescription('❌ Command is down for maintenance.')
      message.channel.send({ embeds: [embed] });
    }
  }