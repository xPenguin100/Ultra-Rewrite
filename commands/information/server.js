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
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addFields(
      { name: 'Name', value: (`${message.guild.name} (\`${message.guild.id}\`)`), inline: true},
      { name: 'Owner', value: `<@${message.guild.ownerId}> (\`${message.guild.ownerId}\`)`},
      { name: 'Created On', value: (`${moment.utc(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
      { name: `Boost Count [\`${message.guild.premiumSubscriptionCount}\`]`, value: `\`${message.guild.premiumTier}\``, inline: true},
      { name: 'Member Count', value: `${message.guild.members.cache.filter(member => !member.user.bot).size} (${message.guild.members.cache.filter(member => member.user.bot).size})`},
      { name: `Channel Count [${message.guild.channels.cache.size}]`, value: `Text: \`${channels.filter(channel => channel.type === 'text').size}\`, Voice: \`${channels.filter(channel = channel.type === 'voice').size}\``},
    )
    .addField(`Roles [${message.guild.roles.cache.size}]`, message.guild.roles.cache.map((r) => r).join(", "), false)  
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
    .setTimestamp()
    .setColor('#2F3136')
    //.setDescription('❌ Command is down for maintenance.')
      message.channel.send({ embeds: [embed] });
    }
  }