module.exports = {
    name: 'announce',
    description: 'An announce command!',
    run: async(message, args) => {

        if(!message.member.permissions.has("MENTION_EVERYONE")) return message.reply('You have insufficient permission to perform this! This command requires the \`MENTION_EVERYONE\` permission.')
        if(!message.guild.me.permissions.has("MENTION_EVERYONE")) return message.reply('I have insufficient permissions to execute this! I require the \`MENTION_EVERYONE\` permission.')
        let channel = message.mentions.channels.first()
        if(!channel) return message.reply('Where am I sending the announcement to?')
        let announcement = args.slice(1).join(" ")
        if(!announcement) return message.reply('What do you want me to announce?')

        const choice = await message.reply('You have a choice. Do you want me to mention everyone, or no?')
        try {
            await choice.react("👍");
            await choice.react("👎");
          } catch (err) {
            channel.send("Error sending emojis!");
            throw err;
          }

        const collector = choice.createReactionCollector((reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).permissions.has("MENTION_EVERYONE"),{ dispose: true, time: 15000 });

        collector.on("collect", (reaction) => {
            switch (reaction.emoji.name) {
              case "👍":
                channel.send('@everyone', announcement)
                message.reply(`Successfully sent message to ${channel}`)
              case "👎":
                channel.send(announcement)
                message.reply(`Successfully sent message to ${channel}`)
            }
          });
    }
}