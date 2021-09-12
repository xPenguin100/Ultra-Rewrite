const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'help',
    description : "Display current help information.",
    execute(message) {


        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 4096, dynamic: true});


    
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('🔔Help Panel')
        .setDescription(`Hello ${user.tag}, below is the current up to date commands on this bot.`)
        .addFields(
          { name: '🔧 Utility', value: ("**?ticket** - Starts a ticket\n**?avatar** - Gets avatar of mentioned user\n**?userinfo** - Gets the info about the user\n**?server** - Gets the info about the server\n**?suggest** - Suggest something!\n**?stats** - Get the latest info on the bot\n**?nickname** - Changes nickname\n**?ping** - Gets the bot's ping!\n**?invite** - Get the invite to the bot\n**?help** - You're reading it!\n**?bot** - Get the latest info on the bot (another way)")},
          { name: '😄 Fun', value: (`**?aww** - Gets a random picture of a cute animal!\n**?wallpaper** - Gets a random wallpaper!\n**?meme** - Gets a random meme!\n**?8ball** - Magic 8ball!`)},
          { name: '🔨Moderation', value: (`**?lockdown** - Lockdowns the server\n**?lift-lockdown** - Lifts the lockdown\n**?modnick** - Changes the nickname for the user mentioned\n**?unban** - Unbans a user with ID\n**?lock** - Locks the channel mentioned\n**?unlock** - Unlocks the channel mentioned\n**?ban** - Bans the user mentioned\n**?kick** Kicks the user mentioned\n**?slowmode** - Changes the slowmode of the channel`)}
        )

        .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
        .setTimestamp()
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed] });
    }
}