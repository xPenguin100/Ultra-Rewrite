const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'say',
    description: 'Say command',
    run: async(message, args) => {

        //VARIABLES
        let say = args.join(" ")

        const sayEmbed = new MessageEmbed()
        .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })       
        .setDescription(say)
        .setColor('#2F3136')
        message.reply({ embeds: [sayEmbed] })
    }
}