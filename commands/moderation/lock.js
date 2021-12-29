const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "lock",
    description: "locks a given channel!",
    run: async(message, args) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("You need the `MANAGE_CHANNELS` permission to use this command!")
        let channel = message.mentions.channels.first()
        if(!channel) return message.reply("Please mention a valid channel!")
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
        const alreadylockedembed = new MessageEmbed()
        .setColor(`#2F3136`)
        .setDescription(`❌ This channel has already been locked!`)
        if(!channel.permissionsFor(channel.guildId, true).has("SEND_MESSAGES")) return message.reply({ embeds: [alreadylockedembed] })
        const embed = new MessageEmbed()
        .setTitle("Channel Locked!")
        .setColor('#2F3136')
        .setDescription(`✅ ${channel} has been locked by ${message.author.tag} for \`${reason}\`.`)
        .setTimestamp()
        channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: false,
          });
          channel.permissionOverwrites.edit(message.author, {
            SEND_MESSAGES: true,
          });


        channel.setName(`🔒 ${channel.name}`)
          
        await message.channel.send({ embeds: [embed] });

    }
}