const { Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Server info command',
    execute(message) {
        
        let embed = new MessageEmbed()
        .setDescription(`🏓Pong! ${Date.now() - message.createdTimestamp}ms`)
        .setColor('#2F3136')
        message.reply({ embeds: [embed] });

    }
  }