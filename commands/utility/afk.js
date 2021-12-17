const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'afk',
    description: 'AFK command',
    run: async(client, message, args) => {

        let reason = args.join(" ")
        await db.set(`afk-${message.author.tag}+${message.guild.id}`, reason)

        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`AFK Set!`)
        .setDescription(`You have been set AFK for ${reason}.`)
        .setColor('GREEN')
        .setFooter(`By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.reply({ embeds: [embed] })
    }
}