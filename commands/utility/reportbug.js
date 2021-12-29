const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'reportbug',
    description: 'Report a bug!',
    aliases: ['bug', 'bugreport'],
    run: async(client, message, args) => {
        const owner = client.users.cache.get('515124684946276362');

        const query = args.join(" ");
        if (!query) return message.reply('Please specify the bug on which you are reporting!')

        const reportEmbed = new MessageEmbed()
        .setTitle('🐛Bug Reported!🐛')
        .addFields(
            { name: 'Author', value: `${message.author} (\`${message.author.id}\`)`},
            { name: 'Server', value: `${message.guild.name} (\`${message.guild.id}\`)`},
            { name: 'Bug Reported', value: `${query}`},
        )
        .setFooter({ text: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
        .setTimestamp()
        .setColor('#2F3136')

        owner.send({ embeds: [reportEmbed] })
        message.reply('Successfully reported the bug! Thank you for helping keep Ultra bug-less!')

    }
}