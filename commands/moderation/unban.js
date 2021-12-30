const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'unban',
    description: 'Unban members!',
    run: async(message, args) => {
        //if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You do not have enough permissions! You need `BAN_MEMBERS` to use this command.")
        //if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I am missing the `BAN_MEMBERS` permission, so I cannot execute this command!")

        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
        let userId = args[2]
        if(!userId) return message.reply("Please give a user ID so I can unban!")
        if(isNaN(userId)) return message.channel.send("That isn't a valid user ID!")

        message.guild.bans.fetch().then(async bans => {
            if(bans.size === 0) return message.reply("No one is banned in this server!")
            let BannedUser = bans.find(ban => ban.user.id == userId)
            if(!BannedUser) return message.reply("This user isn't banned!")
            await message.guild.members.unban(BannedUser.user, reason).catch(err =>{
                const embed = new MessageEmbed()
                .setColor("2F3136")
                .setDescription(`❌ Something went wrong!`)
                return message.reply({ embeds: [embed] })
            }).then(() => {
                const embed = new MessageEmbed()
                .setColor("2F3136")
                .setDescription(`✅ <@${userId}> has been unbanned for \`${reason}\`.`)
                message.reply({ embeds: [embed] })
            })
        })
    }
}