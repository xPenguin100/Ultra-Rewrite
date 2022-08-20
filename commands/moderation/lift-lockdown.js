const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'lift-lockdown',
    description: 'Lockdown command!',
    run: async(message, args) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("You don't have enough permissions to execute this command!")
        if(!message.member.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("I don't have enough permissions to execute this command!")
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
    
        message.guild.channels.cache.forEach(channel => {
            try {
                channel.permissionOverwrites.edit(message.guild.roles.cache.find(c => c.name.toLowerCase().trim() == "@everyone"), {
                    SEND_MESSAGES: true
                })
            }catch(e) {
                console.log(e)
                return message.channel.send(`Error unlocking ${channel}.`)
            }
        })

        if (message.guild.name.includes("🔒 |")){
            string.replace("🔒 |", " ")
        }
        
        const embed = new MessageEmbed()
        .setColor('2F3136')
        .setDescription(`✅ Successfully lifted lockdown for \`${reason}\`.`)
        message.channel.send({ embeds: [embed] })
    }
}