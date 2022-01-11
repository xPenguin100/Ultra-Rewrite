const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "howgay",
    description: "a howgay command",

    run: async(message) => {
        let gaytarget = message.mentions.users.first()
        if(!gaytarget) gaytarget = message.author

        let rng = Math.floor(Math.random() * 101);

        const embed = new MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${gaytarget.username} is ` + rng + "% Gay🌈")
        .setColor("2F3136")

        message.channel.send({ embeds: [embed] });
    }
}