const { MessageEmbed, MessageFlags } = require('discord.js')

module.exports = {
    name: "suggest",
    description: "starts a poll",

    async run (client, message, args) {
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply("Please specify a channekl you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setTitle("New Suggestion!")
        .setDescription(theDescription)
        .setFooter("Suggested by: "+ message.author.username +'#'+ message.author.discriminator) //optional

        let msgEmbed = await channelID.send({ embeds: [embed] });        
        await msgEmbed.react('✅') //👎👍
        await msgEmbed.react('❌')
        new MessageEmbed()
        .setDescription(`✅ Successfully sent your suggestion to ${channelID}.`)
        .setColor('#2F3136')
        message.reply({ embeds: [embed] })
    }
}