const { MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'warnings',
    description: 'Shows the warnings of the user mentioned',
    run: async(client, message, args) => {
        let user = message.mentions.users.first()
        if(!user) return message.reply('Please mention a user so I can get their warnings!')

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if(warnings === null) warnings = 0;

        const warningsembed = new MessageEmbed()
        .setTitle(`Warnings`)
        .setColor('#2F3136')
        .setDescription(`${user} has ${warnings} warnings.`)
        message.reply({ embeds: [warningsembed] })
    }
}