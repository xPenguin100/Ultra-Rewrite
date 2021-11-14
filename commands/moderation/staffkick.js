const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'staffkick',
    description: 'Kick a staff from the team',
    run: async(client, message, args) => {
        if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I cannot execute this! I am missing the \`MANAGE_ROLES\` permission.")
        let target = message.mentions.users.first()
        if(!target) return message.reply('Please specify whose perms you would like to vote on revoking!')

        let reason = args.slice(1).join(" ")
        if(!reason) reason = 'No reason'

        const staffvote = new MessageEmbed()
        .setTitle('👢 Staff Kick Vote')
        .setDescription(`${target} has been chosen to be kicked from the staff team. Do all staff members accept this choice?`)
        .setColor('#2F3136')
        const staffvotemessage = await message.reply({ embeds: [staffvote] })
        try {
            await staffvotemessage.react("👍");
            await staffvotemessage.react("👎");
          } catch (err) {
            channel.send("Error sending emojis!");
            throw err;
          }
          
      const collector = staffvotemessage.createReactionCollector({ dispose: true, time: 15000 });
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "👍":
            message.reply('This part of this command is still a work in progress.')
            break;
          case "👎":
            const denyembed = new MessageEmbed()
            .setColor(`#2F3136`)
            .setDescription(`Majority of staff voted no, so ${target} will not have their perms revoked.`)
            message.reply({ embeds: [denyembed] });
            break;
        }
      });
    }
}