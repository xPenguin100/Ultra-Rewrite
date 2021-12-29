const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
         if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I can't execute this because I'm missing the `BAN_MEMBERS` permission!")
         if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You can't use this command!")
        let target = message.mentions.users.first();
        if(!target) return message.reply('Please mention someone to ban!')
       // if (message.author.roles.highest.position <= target.roles.highest.position) {return message.channel.send("The user you are attempting to ban has a higher role than you.")}
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            const embed = new MessageEmbed()
            .setColor("2F3136")
            .setDescription(`✅ ${target} has been banned for \`${reason}\`!`)
            message.channel.send({ embeds: [embed] });
        }else{
            if(!target.bannable) return message.channel.send("I was unable to ban this user!");

            const embed = new MessageEmbed()
            .setColor("2F3136")
            .setDescription("❌ You couldn't ban that member!")
            message.channel.send({ embeds: [embed] });
        }
    }
}