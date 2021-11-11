const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'approve',
    description: 'Approves a suggestion!',
    run: async(client, message, args, discord) => {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return;
        const messageId = args[0];
        const acceptreason = args.slice(1).join(" ");
        let suggestionChannels = message.guild.channels.cache.find("suggestions")
        let suggestedEmbed = await suggestionChannels.messages.fetch(messageId);

        if(!messageId) return message.reply("Please specify a valid message ID!")
        if(!acceptreason) return message.reply('Please specify a reason for accepting this suggestion!')

        
            
            const data = suggestedEmbed.embeds[0];
            const acceptedEmbed = new MessageEmbed()
            .setAuthor(data.author.name, data.author.IconURL)
            .setDescription(data.description)
            .setColor('2F3136')
            .addField('Status:', 'Accepted')
            .addField('Reason', acceptreason)

            suggestedEmbed.edit({ embeds: [acceptedEmbed] })

            const user = await client.users.cache.find((u) => u.tag === data.author.name)
            user.send(`Your suggestion has been approved in ${message.guild.name}!`);
    }

    }