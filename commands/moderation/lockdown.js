const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'lockdown',
    description: 'Lockdown command!',
    run: async(message, args, Client) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send("You don't have enough permissions to execute this command!")
        if(!message.member.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("I don't have enough permissions to execute this command!")
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
    
        message.guild.channels.cache.forEach(channel => {
            try {
                channel.permissionOverwrites.edit(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                    SEND_MESSAGES: false
                })
            }catch(e) {
                console.log(e)
                return message.channel.send(`❌ I couldn't lock ${channel}.`)
            }
        })

        guild.setName(`🔒 | ${guild.name}`)
        
        const embed = new MessageEmbed()
        .setColor('2F3136')
        .setDescription(`✅ Successfully initiated lockdown for \`${reason}\``)
        message.channel.send({ embeds: [embed] })
    }
}