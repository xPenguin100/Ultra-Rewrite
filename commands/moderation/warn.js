const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'warn',
    description: 'Warn',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply('You cannot execute this command! You are missing the `KICK_MEMBERS` permission.')
        
        let author = message.mentions.users.first() || message.author
        let user = message.mentions.members.first()
        if(!user) return message.reply('Please mention a user to warn!')

        if(message.mentions.users.first().bot) return message.reply('You cannot warn bots!')
        if(message.author.id === user.id) return message.reply('You cannot warn yourself!')
        if(user.id === message.guild.ownerId) return message.reply("You can't warn the owner of this server.")

        const reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason specified"

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if(warnings === 3) return message.reply(`${user} has already reached their maximum warning capacity.`)

        if(warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            const warndm = new MessageEmbed()
            .setColor('#2F3136')
            .setTitle(`Warned in ${message.guild.name}`)
            .addFields(
                { name: 'Moderator', value: `${message.author}`},
                { name: 'Reason', value: `${reason}`},
            )
            user.send({ embeds: [warndm] })
            const warnsuccess = new MessageEmbed()
            .setTitle('User Warned!')
            .setColor('#2F3136')
            .addFields(
                { name: 'Moderator', value: `${message.author}`},
                { name: 'User Warned', value: `${user}`},
                { name: 'Reason', value: `${reason}`},
            )
            await message.reply({ embeds: [warnsuccess] })
          }
    }
}