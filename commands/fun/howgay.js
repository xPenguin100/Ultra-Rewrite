const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "howgay",
    description: "a howgay command",

    async run (client, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("2F3136")

        message.channel.send({ embeds: [howgayembed] });
    }
}