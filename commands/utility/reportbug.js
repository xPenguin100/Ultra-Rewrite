const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reportbug',
    description: 'Report a bug!',
    run: async(client, message, args) => {
        const owner = client.users.cache.get('515124684946276362');
        let author = message.mentions.users.first() || message.author

        const query = args.join(" ");
        if (!query) return message.reply('Please specify the bug on which you are reporting!')

        const reportEmbed = new MessageEmbed()
        .setTitle('🐛Bug Reported!🐛')
        .addFields(
            { name: 'Author', value: `${message.author}`},
            { name: 'Server', value: `${message.guild.name} (\`${message.guild.id}\`)`},
            { name: 'Bug Reported', value: `${query}`},
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .addTimestamp()
        .setColor('#2F3136')

        owner.send({ embeds: [reportEmbed] })

    }
}