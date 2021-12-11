const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "howgay",
    description: "a howgay command",

    async run (client, message, args) {
        let author = message.mentions.users.first() || message.author
        let gaytarget = message.mentions.users.first() 
        if(!gaytarget) gaytarget = message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${gaytarget.username} is ` + rng + "% Gay🌈")
        .setColor("2F3136")

        message.channel.send({ embeds: [howgayembed] });
    }
}