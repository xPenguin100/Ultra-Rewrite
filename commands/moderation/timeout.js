const ms = require('ms')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'timeout',
    description: 'A timeout command',
    run: async(message, args) => {
        if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply('Insufficient permissions! I need \`KICK_MEMBERS\` to execute this.')
        if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You can't execute this! You need `KICK_MEMBERS` to use this command.")
        let target = message.mentions.members.first() || message.member
        if(!target) return message.reply('Please specify someone to timeout.')
        if(target){
            let duration = args[1]
            if(!duration) return message.reply('Please specify a duration.')
            if(
                !args[1].endsWith("d") &&
                !args[1].endsWith("h") &&
                !args[1].endsWith("m") &&
                !args[1].endsWith("s")
            ) return message.reply('Please specify a valid form of duration (d, h, m, s).')

            let reason = args.slice(2).join(" ")
            if(!reason) reason = 'No reason specified'

            let timeouttarget = message.guild.members.cache.get(target.id)
            timeouttarget.timeout()
            const embed = new MessageEmbed()
            .setDescription(`${target} has been timed-out for ${duration} for \`${reason}\`.`)
            .setColor('#2f3136')
            .setTimestamp()
            message.reply({ embeds: [embed] })

            setTimeout(async () => {
                await message.reply(`${target}'s timeout has been removed.`)
            }, ms(args[1]))
        }
    }
}