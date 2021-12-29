const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'feedback',
    description: 'Give feedback!',
    run: async(client, message, args) => {

        let owner = client.users.cache.get('515124684946276362');
        let query = args.join(" ");
        if (!query) return message.reply('Please specify your feedback!')

        const feedbackEmbed = new MessageEmbed()
        .setTitle('💡New Feedback!💡')
        .addFields(
            { name: 'Author', value: `${message.author} (\`${message.author.id}\`)`},
            { name: 'Server', value: `${message.guild.name} (\`${message.guild.id}\`)`},
            { name: 'Feedback Given', value: `${query}`},
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        .setColor('#2F3136')

        owner.send({ embeds: [feedbackEmbed] })
        message.reply('Successfully sent your feedback! Thank you for helping to make Ultra even better!')

    }
}