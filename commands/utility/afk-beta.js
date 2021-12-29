const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'afk-beta',
    description: 'AFK command',
    run: async(message, args) => {

        let reason = args.join(" ")
        if(!reason) reason = 'No reason specified'
        await db.set(`afk-${message.author.tag}+${message.guild.id}`, reason)

        const embed = new MessageEmbed()
        .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })       
        .setTitle(`AFK Set!`)
        .setDescription(`You have been set AFK for \`${reason}\`.`)
        .setColor('GREEN')
        .setFooter({ text: `By: ${messge.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
        .setTimestamp()
        message.reply({ embeds: [embed] })
    }
}