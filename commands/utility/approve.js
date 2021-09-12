const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'approve',
    description: 'Approves a suggestion!',
    async execute(client, message, args, discord) {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return;
        const messageId = args[0];
        const acceptreason = args.slice(1).join(" ");

        if(!messageId) return message.reply("Please specify a valid message ID!")
        if(!acceptreason) return message.reply('Please specify a reason for accepting this suggestion!')

        
            let suggestionchannel = message.mentions.channels.first();
            let suggestedEmbed = await suggestionchannel.messages.fetch(messageId);
            
            const data = suggestedEmbed.embed[0];
            const acceptedEmbed = new MessageEmbed()
            .setAuthor(data.author.name, data.author.IconURL)
            .setDescription(data.description)
            .setColor('2F3136')
            .addField('Status:', 'Accepted')
            .addField('Reason', acceptreason)

            suggestedEmbed.edit({ embeds: [acceptedEmbed] })

            const user = await client.users.cache.find((u) => u.tag === data.author.name)
            user.dm(`Your suggestion has been approved in ${message.guild.name}!`);
    }

    }