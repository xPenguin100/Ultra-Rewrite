const { MessageEmbed, Discord } = require('discord.js')
const timestamp = require('discord-timestamp')

module.exports = {
    name: 'server',
    description: 'User info command',
    execute(message) {
  
      let channels = message.guild.channels.cache;

     let serverembed = new MessageEmbed()
     .setAuthor({ name: `${message.guild.name}`, url: "", iconURL: `${message.guild.iconURL({ dynamic: true })}` })       
     .setThumbnail(message.guild.iconURL())
    .addFields(
      { name: 'Owner', value: `<@${message.guild.ownerId}> (\`${message.guild.ownerId}\`)`},
      { name: 'Created On', value: (`<t:${timestamp(message.guild.createdAt)}:R>`), inline: true},
      { name: `Boost Count [\`${message.guild.premiumSubscriptionCount}\`]`, value: `\`${message.guild.premiumTier}\``, inline: true},
      { name: 'Member Count', value: `${message.guild.members.cache.filter(member => !member.user.bot).size} humans (${message.guild.members.cache.filter(member => member.user.bot).size} bots)`, inline: true},
      { name: `Channel Count [\`${message.guild.channels.cache.size}\`]`, value: `Categories: \`${channels.filter(channel => channel.type === 'GUILD_CATEGORY').size}\`, Text: \`${channels.filter(channel => channel.type === 'GUILD_TEXT').size}\`, Voice: \`${channels.filter(channel => channel.type === 'GUILD_VOICE').size}\``, inline: true},
     // { name: `Channel Count [\`${message.guild.channels.cache.size}\`]`, value: `${channels.filter(channel => channel.type === 'GUILD_TEXT').size}`, inline: true}
    )
    .addField(`Roles [${message.guild.roles.cache.size}]`, message.guild.roles.cache.map((r) => r).join(" "), false) 
    .addField(`Emojis [${message.guild.emojis.cache.size}]`, message.guild.emojis.cache.map((r) => r).join(" "), false) 
    .setFooter({ text: `Requested By: ${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()
    .setColor('#2F3136')
    //.setDescription('❌ Command is down for maintenance.')
      message.reply({ embeds: [serverembed] });
    }
  }
  //moment.utc(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a')