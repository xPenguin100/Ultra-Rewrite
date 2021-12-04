const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: 'gstarttest',
    description: 'A simple gstart command',
    run: async(client, message, args) => {

        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply('You have insufficient permissions!')
        let author = message.mentions.users.first() || message.author

        let gchannel = message.mentions.channels.first()
        if(!gchannel) return message.reply('Please mention a channel!')

        let time = args[1]
        if(!time) return message.reply('You did not specify a duration!')

        if (
            !args[1].endsWith("d") &&
            !args[1].endsWith("h") &&
            !args[1].endsWith("m") &&
            !args[1].endsWith("s") 
        )
            return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds)')

        let prize = args[2]//.slice(3).join(" ")
        if(!prize) return message.reply('What is the prize?')

        message.delete()
        gchannel.send("🎉**NEW GIVEAWAY!**🎉")

        const embed = new MessageEmbed()
        .setDescription(`**Prize:** ${prize}\n**Duration:** ${time}\n**Host:** ${message.author}`)
        .setTimestamp(Date.now + ms(args[1]))
        .setColor('#2F3136')
        let n = await gchannel.send({ embeds: [embed] })
        n.react("tada")
        setTimeout(() => {
            if(n.reactions.cache.get("tada").count <= 1) {
                return message.channel.send("Not enough people for me to draw a winner!")
            }

            let winner = n.reactions.cache.get("tada").users.cache.filter((u) => !u.bot).random();
            message.reply(`Congratulations ${winner}! You just won the **${prize}**!`
            );
        }, ms(args[1]));
    }, 
}