const { MessageEmbed } = require('discord.js')
const timestamp = require('discord-timestamp')

module.exports = {
    name: 'channelinfo',
    description: 'User info command',
    execute(message) {
  
  
      const channel = message.mentions.channels.first() ?? message.channel
      if(!channel) channel = message.channel
 
      let embed = new MessageEmbed()
      .setDescription(`**${channel.name}**\n**ID:** \`${channel.id}\`\n**Type:** \`${channel.type}\`\n**Created On:** <t:${timestamp(channel.createdAt)}:R>\n**Topic:** ${channel.topic !== null ? `${channel.topic}` : 'No topic found'}`)
      .setFooter({ text: `Requested By: ${message.author.tag}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
      .setTimestamp()
      //.setDescription('❌ Command Down for Maintenance!')
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  } 
  //moment.utc(channel.createdAt).format('MMMM Do YYYY, h:mm:ss a')