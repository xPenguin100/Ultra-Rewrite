const randomPuppy = require('random-puppy');
const { Discord, MessageEmbed } = require('discord.js');

module.exports = {
    name: "aww",
    description: "dog command, sends a dog from certain place",

    async run (client, message, args) {
        const subReddits = ["dogpictures", "puppies", "cats", "bunnies", "cuteanimals"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new MessageEmbed()
        .setColor("#2F3136")
        .setImage(img)
        .setTitle(`AWW!! Cute!! 🐶🐇🐈`)
        .setURL(`https://reddit.com/r/${random}`)

        await message.reply({ embeds: [embed] })
    }
}