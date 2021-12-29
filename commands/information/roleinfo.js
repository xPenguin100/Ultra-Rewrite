const { MessageEmbed } = require('discord.js')
const timestamp = require('discord-timestamp')

module.exports = {
    name: 'roleinfo',
    description: 'User info command',
    execute(message) {
  
  
      let role = message.mentions.roles.first()
      if(!role) return message.reply('Please mention a role!')
 
      const embed = new MessageEmbed()
    .setDescription(`🏷 **${role.name}**\n**ID:** ${role.id}\n**Type:** ${role.hexColor}\n**Created On:** <t:${timestamp(role.createdAt)}:R>\n**❓ Other**\n**Hoisted:** ${role.hoist}\n**Mentionable:** ${role.mentionable}\n**Managed:** ${role.managed}`)
    .setFooter({ text: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()
    //.setDescription('❌ Command Down for Maintenance!')
    .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  } 
  //moment.utc(role.createdAt).format('MMMM Do YYYY, h:mm:ss a')