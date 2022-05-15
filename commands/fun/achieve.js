const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'achieve',
    description: 'Achieve',
    run: async (message, args) => {
        let number = args[1];
        if (!number) return message.reply("Please provide a number.")
        let text = args.slice(2).join(' ');
        if (!text) return message.reply("Please provide some text.")
        let embed = new MessageEmbed()
        .setTitle("Advancement Made!")
        .setImage(`https://minecraftskinstealer.com/achievement/${number}/Advancement+Made!/${text}`)
        .setColor('#2F3136')
        .setTimestamp()
        message.reply({embeds : [embed]})
    }
}