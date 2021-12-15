const { MessageEmbed } = require('discord.js')
 //.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
module.exports = {
    name: 'say',
    description: 'Say command',
    run: async(client, message, args) => {

        //VARIABLES
        let say = args.join(" ")

        const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(say)
        .setColor('#2F3136')
        message.reply({ embeds: [sayEmbed] })
    }
}