const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name : 'avatar',
    description : "avatar command",
    execute(message, args) {

        const Discord = require("discord.js");
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 4096, dynamic: true});


    
        const embed = new MessageEmbed()
        .setAuthor(user.tag, message.author.AvatarURL)
        .setTitle('Avatar')
        .setURL(avatar)
        .setImage(avatar)
        .setColor('#2F3136')
        const row = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setLabel('🪟 PNG')
            .setURL(`${user.avatar({ format: 'png' })}`)
            .setStyle('LINK'),
            new MessageButton()
            .setLabel('📸 JPG')
            .setURL(`${user.avatar({ format: 'jpg' })}`)
            .setStyle('LINK'),
            new MessageButton()
            .setLabel('🖥️ WEBP')
            .setURL(`${user.avatar({ format: 'webp' })}`)
            .setStyle('LINK'),
            new MessageButton()
            .setLabel('🎥 GIF')
            .setLink(`${user.avatar({ format: 'gif' })}`)
            .setStyle('LINK'),
      );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}