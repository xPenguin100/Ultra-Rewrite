const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'appreciate',
    description: 'Warn',
    aliases: ['thank'],
    run: async(client, message, args) => {
        
        let author = message.mentions.users.first() || message.author
        let user = message.mentions.members.first()
        if(!user) return message.reply('Please mention a user to appreciate!')

        if(message.mentions.users.first().bot) return message.reply('You cannot appreciate bots!')
        if(message.author.id === user.id) return message.reply('You cannot appreciate yourself!')

        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply('If you are executing this command, you must say why you appreciate this person!');

        let appreciations = db.get(`appreciations_${message.guild.id}_${user.id}`)

        if(appreciations === null) {
            db.set(`appreciations_${message.guild.id}_${user.id}`, 1)
            const appreciatedm = new MessageEmbed()
            .setColor('#2F3136')
            .setTitle(`Appreciated in ${message.guild.name}`)
            .addFields(
                { name: 'User', value: `${message.author}`},
                { name: 'Reason', value: `${reason}`},
            )
            user.send({ embeds: [appreciatedm] })
            const appreciationsuccess = new MessageEmbed()
            .setTitle('User Appreciated! You have a kind soul.')
            .setColor('#2F3136')
            .addFields(
                { name: 'User', value: `${message.author}`},
                { name: 'User Appreciated', value: `${user}`},
                { name: 'Reason', value: `${reason}`},
            )
            await message.reply({ embeds: [appreciationsuccess] })
          }
    }
}