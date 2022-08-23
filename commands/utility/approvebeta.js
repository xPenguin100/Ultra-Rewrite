const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'approvebeta',
    description: 'The beta command for approving suggestions',
    run: async(client, message, args) => {

        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Higher perms required.")
        if(message.member.permissions.has("MANAGE_MESSAGES")) {

        let suggestionId = args[1]
        let acceptQuery = args.slice[2].join(" ")
        let suggestionChannel = message.guild.channels.cache.get("867106022455246868")

        if(!suggestionId) return message.reply('A suggestion ID is a required argument to proceed!')
        if(!acceptQuery) return message.reply('Please provide a reason for accepting this suggestion!')
        if(!message.guild.channels.cache.get("867106022455246868")) return message.reply("No such suggestion channel exists.")

        let suggestion = suggestionChannel.messages.fetch(suggestionId)
        let data = suggestion.embeds[0]
        const embed = new MessageEmbed()
        .setTitle(data.title)
        .setDescription(`${data.description}\n\n **Status: Accepted** \n ${acceptreason}`)
        .setColor("GREEN")
        .setFooter({ text: 'This suggestion has been approved', iconURL: `` })
        suggestion.edit({ embeds: [embed] })

        }
    }
}