module.exports = {
    name: 'kick',
    description: "This command bans a member!",
    execute(message, args){
         if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I can't execute this because I'm missing the `BAN_MEMBERS` permission!")
         if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You can't use this command!")
        if(!args[0]) return message.reply('Please mention someone to kick!')
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been kicked!");
        }else{
            if(!target.bannable) return message.channel.send("I was unable to kick this user!");

            message.channel.send(`You couldn't kick that member!`);
        }
    }
}