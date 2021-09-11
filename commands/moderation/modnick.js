const { MessageFlags, MessageEmbed } = require("discord.js");
const { run } = require("./lock");

module.exports = {
    name: 'modnick',
    description: 'A command for moderators to change nicknames',
    run: async(client, message, args, prefix) => {

        if (!message.member.permissions.has("MANAGE_NICKNAMES")) return message.reply('You don\'t have permission to perform this action!')

        let user = message.mentions.users.first()
        if (!user) return message.reply('Please mention a user to change their nickname!')

        let nickname = args.slice(1).join(" ")
        if (!nickname) return message.reply('Please specify a new nickname!')

        let member = message.guild.members.cache.get(user.id)
        await member.setNickname(nickname)

        const embed = new MessageEmbed()
        .setDescription(`✅ Successfully changed ${user}'s nickname to ${nickname}.`)
        .setColor(`#2F3136`)

        await message.reply({ embeds: [embed] })

    }
}