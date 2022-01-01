const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports = {
    name: "aww",
    description: "dog command, sends a dog from certain place",
    run: async (message) => {
        const subReddits = ["dogpictures", "puppies", "catpictures", "cat"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(img)
        .setTitle(`AWW! Cute! 🐶🐱`)
        .setURL(`https://reddit.com/r/${random}`)

        await message.reply({ embeds: [embed] })
    }
}