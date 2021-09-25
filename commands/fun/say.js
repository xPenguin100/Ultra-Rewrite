const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'say',
    description: 'Say command',
    run: async(client, message, args) => {
        const sayEmbed = new MessageEmbed()
        .setColor(`2F3136`)
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        message.reply({ embeds: [sayEmbed] })
    }
}