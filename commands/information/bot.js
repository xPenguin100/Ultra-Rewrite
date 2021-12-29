const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'bot',
    description : "Display current statistics about this bot.",
    execute(message) {

        let avatar = message.author.displayAvatarURL({size: 4096, dynamic: true});
        let nodeversion = process.version
        //let discordjsversion = discord.version
    
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag + avatar)
        .setTitle('Bot Panel')
        .setImage('https://media.discordapp.net/attachments/872963017741066331/872963055187800124/Ultra-Banner.jpg?width=1179&height=663')
        .addFields(
            { name: 'Invite Link', value: '[Click Here](https://dsc.gg/ultraa "Click to invite Ultra. Thank you!")', inline: true},
            { name: 'Support Server', value: `**COMING SOON**`, inline: true},
            { name: 'Vote for Ultra', value: '[Click Here](https://top.gg/bot/866014328464605184/vote "Vote for Ultra!")', inline: true},
            { name: `Ping`, value: `\`${Date.now() - message.createdTimestamp}ms.\``, inline: true}, 
            { name: 'Owner', value: `<@515124684946276362>`, inline: true},
            { name: 'Servers', value: `\`${message.client.guilds.cache.size}\``, inline: true},
            { name: 'Users', value: `\`${message.client.users.cache.size}\``, inline: true},
            { name: 'Discord.js Version', value: `\`13.4\``, inline: true},
            { name: 'Node Version', value: `\`${nodeversion}\``, inline: true},
        )
        .setColor('#2F3136')
        //.setDescription(`❌ Command is under maintenance.`)
        message.reply({ embeds: [embed] });

    }
}
