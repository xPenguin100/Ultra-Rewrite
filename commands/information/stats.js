const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'stats',
  description: 'a statistical command',
  execute(message) {

    let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});

    let embed = new MessageEmbed()
    .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })       
    .setTitle('Statistics')
    .setImage(avatar)
    .setDescription(`Hello ${user.tag}, you requested to see the latest statistics on this bot. They are found below!`)
    .addFields(
      { name: 'Ping', value: (`My ping is ${Date.now() - message.createdTimestamp}ms`)},
      { name: 'Guilds', value: (`I am in ${message.client.guilds.cache.size} guilds.`)},
      { name: 'Current Discord.js Version', value: ('The current public release of Discord.js is v12. Please refer to [The Official Discord.js Site](https://discord.js.org) to see the new features, and the release date of v13 when it is posted.')},
      { name: 'Current Version', value: ('This bot is on v1.0 beta 1')},
      { name: 'Ping', value: `${Date.now() - message.createdTimestamp}ms`, inline: true},
      { name: 'Users', value: `${message.client.users.cache.size}`, inline: true}
    )

    .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
    .setTimestamp()
    .setColor('#2F3136')
    message.channel.send({ embeds: [embed] });
    }
}