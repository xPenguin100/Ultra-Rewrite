const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "modnote",
    description: "A moderator can write notes on a member for future reference.",
    run: async (message, args) => {

        let userId = args[1]
        if(!userId) return message.reply('Please specify a user ID!')
        if(isNaN(userId)) return message.channel.send("That isn't a valid user ID!")
        const note = args.slice(2).join(" ")
        if(!note) return message.reply("Please provide a note.")

        message.guild.members.fetch().then(async memberlist => {
            let member = memberlist.find(memberinserver => memberinserver.user.id == userId)
            if(!member) return message.reply("This member is not in the server.")
            if(!member.permissions.has("MANAGE_SERVER")) return message.reply("You have insufficient permissions.")
            const NoteEmbed = new MessageEmbed()
            .setTitle("📝 Note Taken!")
            .addFields(
                 { name: "Note:", value: `${note}`},
                 { name: "Member:", value: `<@${userId}>`}
            )
            message.reply({ embeds: [NoteEmbed] })
        })

    }
}