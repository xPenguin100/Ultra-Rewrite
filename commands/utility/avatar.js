const { MessageEmbed, MessageActionRow } = require('discord.js')

module.exports = {
    name : 'avatar',
    description : "avatar command",
    execute(message) {

        let user = message.mentions.users.first() 
        if(!user) user = message.author
        let avatar = user.displayAvatarURL({size: 4096, dynamic: true});

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('PNG')
            .setURL(user.displayAvatarURL({ size: 4096, dynamic: true, format: 'png' }))
            .setStyle('LINK'),
            new MessageButton()
            .setLabel("JPG")
            .setStyle("LINK")
            .setURL(user.displayAvatarURL({ size: 4096, dynamic: true, format: 'jpg' })),
            new MessageButton()
            .setLabel("WEBP")
            .setStyle("LINK")
            .setURL(user.displayAvatarURL({ size: 4096, dynamic: true, format: 'webp'})),
        )
    
        const embed = new MessageEmbed()
        .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })       
        .setTitle('Avatar')
        .setURL(avatar)
        .setImage(avatar)
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed], components: [row] });
    }
}