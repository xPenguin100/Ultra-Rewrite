const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: 'tempban',
    description: 'A command to temporarily ban a user',
    run: async(message, args) => {
        let member = message.mentions.users.first()
        if(!member) return message.reply('You did not specify a user to temp-ban!')

        let reason = args.slice(1).join(" ")
        if(!reason) reason = 'No reason'

        let timeperiod = args[2]
        if(!timeperiod) return message.reply('How long should this user be banned for? \`?tempban <@user> <reason> <time>\`')

        await member.ban()
        const banembed = new MessageEmbed()
        .setTitle('🔨 User Temp-Banned!')
        .setDescription(`${member} has been temp-banned!\n**Reason:** ${reason}\n**Time:** ${timeperiod}\n**Moderator:** ${message.author}`)
        .setColor('#2F3136')
        message.reply({ embeds: [banembed] })

        setTimeout(async () => {
            await message.guild.members.unban(member)
            message.channel.send(`${member} has been unbanned!\n`)
        }, ms(time))
    }
}