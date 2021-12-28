const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: 'timeout',
    description: 'timeouts a member',
    run: async(message, args) => {

        let target = message.mentions.members.first() || message.members
        if(!target) return message.reply('Please specify a member to timeout!')
        let time = args[1]
        if(!time) return message.reply('How long for this timeout?')
        if(
            !args[1].endsWith("d") &&
            !args[1].endsWith("h") &&
            !args[1].endsWith("m") &&
            !args[1].endsWith("s")
        )
        return message.reply('Please provide a valid form of duration (d, h, m, s)!')
        let reason = args.slice(2).join(" ")
        if(!reason) reason = 'No reason'
            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.timeout();
         const embed = new MessageEmbed()
        .setTitle("⏱Member Timed-out")
        .setDescription('Member has been timed out.')
        .addFields(
            { name: 'User', value: `${target}`},
            { name: 'Duration', value: `${time}`},
            { name: 'Reason', value: `${reason}`},
            { name: 'Moderator', value: `${message.author}`}
        )
        .setTimestamp
        message.reply({ embeds: [embed] })
        setTimeout(async () => {
            message.channel.send(`${target}'s timeout is removed.`)
        }, ms(args[1]))

    }
}