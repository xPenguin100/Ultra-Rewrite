const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'kick',
    description: "This command bans a member!",
    execute(message, args){
         if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I can't execute this because I'm missing the `BAN_MEMBERS` permission!")
         if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You can't use this command!")
        if(!args[0]) return message.reply('Please mention someone to kick!')
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
        const target = message.mentions.users.first();
        //if (message.author.roles.highest.position <= target.roles.highest.position) {return message.channel.send("The user you are attempting to kick has a higher role than you.")}
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            const embed = new MessageEmbed()
            .setDescription(`✅ ${target} has been kicked for \`${reason}\`.`)
            .setColor('2F3136')
            message.reply({ embeds: [embed] })
        }else{
            if(!target.kickable) return message.channel.send("I was unable to kick this user!");

            message.channel.send(`You couldn't kick that member!`);
        }
    }
}