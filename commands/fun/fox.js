const randomPuppy = require('random-puppy');
const { Discord, MessageEmbed } = require('discord.js');

module.exports = {
    name: "fox",
    description: "dog command, sends a dog from certain place",

    async run (client, message, args) {
        const subReddits = ["fox"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(img)
        .setTitle(`Aww! Fox! 🦊`)
        .setURL(`https://reddit.com/r/${random}`)

        await message.reply({ embeds: [embed] })
    }
}