const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "mod-notes",
    description: "Write notes on a member.",
    run: async (message, args) => {

        const note = args.join(" ")
        let userId = args[2]
        if(!userId) return message.reply("Please give a user ID!")
        if(isNaN(userId)) return message.channel.send("That isn't a valid user ID!")

        message.guild.members.fetch().then(async memberlist => {
            let member = memberlist.find(memberinserver => memberinserver.user.id == userId)
            if(!member) return message.reply("This member is not in the server.")
            if(!member.permissions.has("MANAGE_SERVER")) return message.reply("Administrative notes are currently disabled.")
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