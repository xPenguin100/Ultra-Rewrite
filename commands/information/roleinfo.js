const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'roleinfo',
    description: 'User info command',
    execute(message, args) {
  
  
      const author = message.mentions.users.first() || message.author
      const role = message.mentions.roles.first()
      const member = message.mentions.members.first() || message.member
 
      let embed = new MessageEmbed()
    .setDescription(`🏷 **${role.name}**\n**ID:** ${role.id}\n**Type:** ${role.hexColor}\n**Created On:** ${moment.utc(role.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**❓ Other**\n**Hoisted:** ${role.hoist}\n**Mentionable:** ${role.mentionable}\n**Managed:** ${role.managed}`)
    .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
    .setTimestamp()
    .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  } 