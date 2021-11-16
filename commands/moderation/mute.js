const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'mute',
    description: 'Mutes a member',
    run: async(client, message, args)  => {
        let user = message.mentions.users.first()
        if(!user) return message.reply('I cannot mute when you have not mentioned anyone.')

        let time = args[1]
        if(!time) return message.reply('Duration is not specified!')

        let reason = args.slice(2).join(" ")
        if(!reason) reason = "No reason"

        const muteembed = new MessageEmbed()
        .setTitle('🔇 Mute Successful!')
        .addFields(
            { name: 'Member Muted:', value: `${user}`},
            { name: 'Duration', value: `${time}`},
            { name: 'Reason:', value: `\`${reason}\``},
            { name: 'Moderator:', value: `${message.author}`}
        )
        .setColor('#2F3136')
        .setTimestamp()
        guild.permissionOverwrites.edit(user.id, {
            SEND_MESSAGES: false,
        })

        await message.reply(`${user} has been muted for ${time}. The reason is \`${reason}\``)
    }
}