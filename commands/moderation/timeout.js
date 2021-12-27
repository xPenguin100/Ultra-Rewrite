const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: 'timeout',
    description: 'timeouts a member',
    run: async(message, args) => {

        let target = message.mentions.members.first() || message.members
        if(!target) return message.reply('Please specify a member to timeout!')
        let time = args[1]
        if(
            !args[1].includes("d") &&
            !args[1].includes("h") &&
            !args[1].includes("m") &&
            !args[1].includes("s")
        )
        return message.reply('Please provide a valid form of duration (d, h, m, s)!')
        let reason = args.slice(2).join(" ")
        if(!reason) reason = 'No reason'
            if(target){
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
}