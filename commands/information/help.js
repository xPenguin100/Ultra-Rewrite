const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'help',
    description : "Display current help information.",
    execute(message) {
      
        let embed = new MessageEmbed()
        .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })       
        .setTitle('🔔Help Panel')
        .setDescription(`Hello ${author.tag}, below are the latest and up-to-date commands for this bot.`)
        .addFields(
          { name: '📋 Information', value: '\`?bot\`, \`?channelinfo\`, \`?help\`, \`?invite\`, \`?membercount\`, \`?ping\`, \`?roleinfo\`, \`?server\`, \`?user\`, \`?vote\`'},
          { name: '🔧 Utility', value: ("\`?appreciate\`, \`?appreciations\`, \`?avatar\`, \`?feedback\`, \`?remind\`, \`?report\`, \`?reportbug\`, \`?suggest\`, \`?ticket\`")},
          { name: '😄 Fun', value: (`\`?8ball\`, \`?achieve\`, \`?bird/cat/dog/meme/fox/panda/wallpaper\`, \`?corona\`, \`?howgay\`, \`?rps\`, \`?say\`, \`?unscramble\``)},
          { name: '🔨Moderation', value: (`\`?ban\`, \`?clearwarns\`, \`?kick\`, \`?lift-lockdown\`, \`?lock\`, \`?lockdown\`, \`?modnick\`, \`?unban\`, \`?unlock\`, \`?warn\`, \`?warnings\``)}
        )
        .setFooter({ text: `Requested By: ${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
        .setTimestamp()
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed] });
    }
}