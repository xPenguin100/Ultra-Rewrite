const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'roleinfo',
    description: 'User info command',
    execute(message, args) {
  
  
      let author = message.mentions.users.first() || message.author
      let role = message.mentions.roles.first()
      if(!role) return message.reply('Please mention a role!')
      let member = message.mentions.members.first() || message.member
 
      const embed = new MessageEmbed()
    .setDescription(`🏷 **${role.name}**\n**ID:** ${role.id}\n**Type:** ${role.hexColor}\n**Created On:** ${moment.utc(role.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**❓ Other**\n**Hoisted:** ${role.hoist}\n**Mentionable:** ${role.mentionable}\n**Managed:** ${role.managed}`)
    .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
    .setTimestamp()
    //.setDescription('❌ Command Down for Maintenance!')
    .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  } 