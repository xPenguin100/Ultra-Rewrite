const { MessageEmbed } = require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'timeout',
    description: 'A timeout command',
    run: async(message, args) => {

        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You don't have high enough permissions.")
        if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have high enough permissions.")

        let target = message.mentions.members.first()
        if(!target) return message.reply('Please mention someone to timeout!')

        let duration = args[1]//.then(ms(args[1]))
        if(!duration) return message.reply('Please specify a duration!')

        let reason = args.slice(2).join(" ")
        if(!reason) reason = "No reason."

        let timeouttarget = message.guild.members.cache.get(target.id)
        if(target.isCommunicationDisabled()) return message.reply('This member is already timed-out.')
        timeouttarget.timeout(parseInt(args[1]))

        const embed = new MessageEmbed()
        .setTitle("⏱ Member Timed-Out")
        .addFields(
        { name: 'Member Timed-out', value: `${target}` },
        { name: 'Duration', value: `${duration}` },
        { name: 'Reason', value: `${reason}` }, 
        )
        .setColor(`2F3136`)

        message.reply({ embeds: [embed] })

        setTimeout(async () => {
            message.reply(`${target}'s timeout has ended.`)
        }, ms(args[1]))

    }
}