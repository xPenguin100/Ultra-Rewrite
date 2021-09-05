module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
         if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I can't execute this because I'm missing the `BAN_MEMBERS` permission!")
         if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You can't use this command!")
        if(!args[0]) return message.reply('Please mention someone to ban!')
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned!");
        }else{
            if(!target.bannable) return message.channel.send("I was unable to ban this user!");

            message.channel.send(`You couldn't ban that member!`);
        }
    }
}