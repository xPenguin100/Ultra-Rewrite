const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'avatar',
    description : "avatar command",
    execute(message) {

        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 4096, dynamic: true});


    
        const embed = new MessageEmbed()
        .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })       
        .setTitle('Avatar')
        .setURL(avatar)
        .setImage(avatar)
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed] });
    }
}