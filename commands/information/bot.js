const { client, MessageEmbed } = require('discord.js')

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
        .addFields(
            { name: 'Invite Link', value: `[https://dsc.gg/ultraa](Click Here)`, inline: true},
            { name: 'Support Server', value: `**COMING SOON**`, inline: true},
            { name: 'Vote for Ultra', value: `[https://top.gg/bot/866014328464605184/vote](Click Here)`, inline: true},
            { name: `Ping`, value: `\`${Date.now() - message.createdTimestamp}ms.\``, inline: true}, 
            { name: 'Owner', value: `<@515124684946276362>`, inline: true},
            { name: 'Servers', value: `\`${message.client.guilds.cache.size}\``, inline: true},
            { name: 'Users', value: `\`${message.client.users.cache.size}\``, inline: true},
            { name: 'Discord.js Version', value: '\`13.2.0\`', inline: true},
            { name: 'Node Version', value: '\`16.12.0\`', inline: true},
        )
        .setColor('#2F3136')
        //.setDescription(`❌ Command is under maintenance.`)
        message.channel.send({ embeds: [embed] });

    }
}
