const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'appreciations',
    description: 'Shows the warnings of the user mentioned',
    aliases: ['thanks'],
    run: async(client, message, args) => {
        let user = message.mentions.users.first()
        if(!user) return message.reply('Please mention a user so I can get their appreciations!')

        let appreciations = db.get(`appreciations_${message.guild.id}_${user.id}`)
        if(appreciations === null) warnings = 0;

        const appreciationsembed = new MessageEmbed()
        .setTitle(`Appreciations`)
        .setColor('#2F3136')
        .setDescription(`${user} has ${appreciations} appreciations.`)
        message.reply({ embeds: [appreciationsembed] })
    }
}