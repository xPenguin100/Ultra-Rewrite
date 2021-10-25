const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "unlock",
    description: "locks a given channel!",
    run: async(client, message, args) => {
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("You need the `MANAGE_CHANNELS` permission to use this command!")
        const channel = message.mentions.channels.first()
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason";
        if(!channel) return message.reply("Please mention a valid channel!")
        let embed = new MessageEmbed()
        .setTitle("Channel Unlocked!")
        .setColor('2F3136')
        .setDescription(`✅ ${channel} has been unlocked by ${message.author.tag} for \`${reason}\`.`)
        .setTimestamp()
        channel.permissionOverwrites.edit(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
          });
          channel.permissionOverwrites.edit(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
          });
          
          channel.name.replace(/^🔒(|-)+/, "")

           console.log(channel.name)
        await message.channel.send({ embeds: [embed] });

    }
}