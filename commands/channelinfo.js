const { MessageEmbed, Discord } = require('discord.js')

module.exports = {
    name: 'channelinfo',
    description: 'User info command',
    execute(message, args) {
  
  
      const author = message.mentions.users.first() || message.author
      const channel = message.mentions.channels.first()
      const member = message.mentions.members.first() || message.member
 
      let embed = new MessageEmbed()
    .setDescription(`#️⃣ **${message.channel.name}**\n**ID:** \`${message.channel.id}\`\n**Type:** \`${message.channel.type}\`\n**Created At:** ${message.channel.createdAt}\n**Topic:** ${message.channel.topic}`)
    .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
    .setTimestamp()
    .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  } 