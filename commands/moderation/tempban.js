const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    name: 'tempban',
    description: 'A command to temporarily ban a user',
    run: async(message, args) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply('You cannot ban members! You are missing the \`BAN_MEMBERS\` permission.')
        if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(`I cannot ban members! I am missing the \`BAN_MEMBERS\` permission.`)
        let target = message.mentions.users.first()
        if(!target) return message.reply('You did not specify a user to temp-ban!')

        let timeperiod = args[1]
        if(!timeperiod) return message.reply('How long should this user be banned for? \`?tempban <@user> <time> <reason>\`')

        if (
            !args[1].endsWith("d") &&
            !args[1].endsWith("h") &&
            !args[1].endsWith("m") &&
            !args[1].endsWith("s") 
        )
            return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds) to specify the ban duration!')

        let reason = args.slice(2).join(" ")
        if(!reason) reason = 'No reason'

        let memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.ban();
        const banembed = new MessageEmbed()
        .setTitle('🔨 User Temp-Banned!')
        .setDescription(`${memberTarget} has been temp-banned!\n**Reason:** ${reason}\n**Time:** ${timeperiod}\n**Moderator:** ${message.author}`)
        .setColor('#2F3136')
        message.reply({ embeds: [banembed] })

        setTimeout(async () => {
            await message.guild.members.unban(memberTarget.id)
            message.guild.bans.fetch().then(async bans => {
            if(bans.size === 0) return message.reply("No one is banned in this server!")
            //if(message.guild.bans.size === 0) return message.reply('This server has no bans.')
            })
            message.channel.send(`${memberTarget} has been unbanned!`)
        }, ms(args[1]))
    }
}