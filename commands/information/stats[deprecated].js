const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'stats[deprecated]',
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
      { name: 'Current Discord.js Version', value: ('The current public release of Discord.js is v13. Please refer to [The Official Discord.js Site](https://discord.js.org) to see the new features, and the release date of v14 when it is posted.')},
      { name: 'Current Version', value: ('This bot is on v1.0 beta 1')},
      { name: 'Ping', value: `${Date.now() - message.createdTimestamp}ms`, inline: true},
      { name: 'Users', value: `${message.client.users.cache.size}`, inline: true}
    )
    .setFooter({ text: `Requested By: ${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
    .setTimestamp()
    .setColor('#2F3136')
    message.channel.send({ embeds: [embed] });
    }
}