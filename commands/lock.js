const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "lock",
    description: "locks a given channel!",
    run: async(client, message, args) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("You need the `MANAGE_CHANNELS` permission to use this command!")
        const channel = message.mentions.channels.first()
        if(!channel) return message.reply("Please mention a valid channel!")
        let embed = new MessageEmbed()
        .setTitle("Channel Locked!")
        .setDescription(`This channel has been locked by ${message.author.tag}`)
        .setTimestamp()
        channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
          });
          channel.permissionOverwrites.edit(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
          });
          
        await message.channel.send({ embeds: [embed] });

    }
}