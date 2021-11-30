const { client, Discord, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'Server info command',
    execute(message) {

        let embed = new MessageEmbed()
        .setTitle('🏓Pong!')
        .addFields(
            { name: 'Client Ping', value: `${Date.now() - message.createdTimestamp}ms.`},
            { name: 'API Ping', value: `${Math.round(client.ws.ping)}ms`},
            //{ name: 'API Latency', value: `${apiLatency}ms.`},
        )
        .setColor('#2F3136')
        message.reply({ embeds: [embed] });

    }
  }