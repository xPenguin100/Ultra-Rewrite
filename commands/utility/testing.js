module.exports = {
    name: "testing",
    description: "A command simply for testing purposes",
    run: async (message, args) => {
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("Congratulations!")
        .setDescription("Hey, you! Yes, you! Congratulations on finding this hidden command! Type: `?shutdown-beta` into chat as a reward. Use it ONLY when the developer is online. #ItShutsDownTheBot. Again, congrats!")
        message.reply("You found the secret command!", { embeds: [embed] })
    }
}