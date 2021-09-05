const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'bot',
    description : "Display current statistics about this bot.",
    execute(message) {
      message.delete({ timeout: 0 })
  .then(msg => console.log(`Deleted message from ${msg.author.username} instantly.`))
  .catch(console.error);


        const Discord = require("discord.js");
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 4096, dynamic: true});

    
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Bot Panel')
        .setImage('https://media.discordapp.net/attachments/872963017741066331/872963055187800124/Ultra-Banner.jpg?width=1179&height=663')
        .setDescription(`**🏛 Guilds:** ${message.client.guilds.cache.size}\n**👥 Users:** ${message.client.users.cache.size}\n**👤 Owner:** <@515124684946276362>\n**⚙ Version:** 1.5.0`)
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed] });

    }
}
