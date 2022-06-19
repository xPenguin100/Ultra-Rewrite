const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "howgay",
    description: "a howgay command",

    run: async(message) => {
        let gaytarget = message.mentions.users.first()
        if(!gaytarget) gaytarget = message.author

        let rng = Math.floor(Math.random() * 101);

        const embed = new MessageEmbed()
        .setAuthor({ name: `"Howgay" has been rewritten in support of Pride Month`})
        .setTitle(`How gay are you?`)
        .setDescription(`${gaytarget.username} is ` + rng + "% Gay🌈")
        .setFooter({ name: "This is a joke command, as the results may not be what you sexually identify as."})
        .setColor("2F3136")

        message.channel.send({ embeds: [embed] });
    }
}