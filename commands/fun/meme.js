const randomPuppy = require('random-puppy');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "meme",
    description: "memes",

    async run (message) {
        const subReddits = ["meme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(img)
        .setTitle(`Lol! Funny!!! 😂🤣😆`)
        .setURL(`https://reddit.com/r/${random}`)

        message.reply({ embeds: [embed] })
    }
}