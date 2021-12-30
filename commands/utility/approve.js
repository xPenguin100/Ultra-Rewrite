const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'approve',
    description: 'Approves a suggestion!',
    run: async (client, message, args) => {

        if(!message.member.permissions.has("MANAGE_MESSAGES")) return;
        const messageId = args[0];
        const acceptreason = args.slice(1).join(" ");

/*
    let suggestionChannel = message.guild.channels.cache.get("867106022455246868")
        //let suggestionChannel = message.guild.channels.cache.find("suggestions")
        let suggestedEmbed = await suggestionChannel.messages.fetch(messageId);
*/

        const suggestionChannel = message.guild.channels.cache.get("867106022455246868")
//let channels = message.guild.channels.filter(c => c.type == 'GUILD_TEXT').array();
console.log(suggestionChannel)
      let suggestedEmbed = await suggestionChannel.messages.fetch(messageId);
        if(!messageId) return message.reply("Please specify a valid message ID!")
        if(!acceptreason) return message.reply('Please specify a reason for accepting this suggestion!')

            const data = suggestedEmbed.embeds[0];
            const acceptedEmbed = new MessageEmbed()
            .setTitle(data.title)
            .setDescription(`${data.description}\n\n **Status: Accepted** \n ${acceptreason}`)
            .setColor('GREEN')
            .setFooter({ text: `This suggestion has been approved.`, iconURL: `` })

            suggestedEmbed.edit({ embeds: [acceptedEmbed] }).then(async (msg) =>{
            msg.react(':thumbsup:');
            msg.react(':thumbsdown:');

            console.log(data)

            const user = await client.users.cache.get((u) => u.tag === data.author)
            const approveEmbed = new MessageEmbed()
            .setTitle("Suggestion Status")
            .setDescription(`Your suggestion has been **approved** by a moderator in ${message.guild.name}!\n\n **Suggestion Message Link:** ${suggestedEmbed.url}`)
            .setColor("BLUE")
            .setThumbnail(suggestedEmbed.guild.iconURL({ dynamic: true }))
            user.send({ embeds: [approveEmbed] }); 
    })

    }
}