const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'report',
    description: 'Report a user!',
    run: async(client, message, args) => {
        let owner = client.users.cache.get('515124684946276362');

        let reporteduser = message.mentions.users.first()
        if(!reporteduser) return  message.reply('Please mention the user you are reporting!')

        const reason = args.join(" ");
        if (!reason) return message.reply('Please specify the reason for reporting this user!')

        const reportuserEmbed = new MessageEmbed()
        .setTitle('⚠ User Reported! ⚠')
        .addFields(
            { name: 'Author', value: `${message.author} (\`${message.author.id}\`)`},
            { name: 'Server', value: `${message.guild.name} (\`${message.guild.id}\`)`},
            { name: 'User Reported', value: `${reporteduser}`},
            { name: 'Reason', value: `${reason}`},
        )
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()
        .setColor('#2F3136')

        owner.send({ embeds: [reportuserEmbed] })
        message.reply('Thank you for the report. Our staff team will review the report and take action if necessary.')

    }
}