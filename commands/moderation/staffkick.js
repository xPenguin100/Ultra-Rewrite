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
        let sv = message.reply({ embeds: [embed] })

        try {
            await sv.react('👍');
            await sv.react("👎");
        } catch (err) {
            message.reply('Error sending emojis!');
            throw err;
        }

          
      const collector = reactionMessage.createReactionCollector((reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).permissions.has("ADMINISTRATOR"),{ dispose: true, time: 15000 });
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "👍":
            message.reply('This part of this command is still a work in progress.')
            break;
          case "👎":
            const denyembed = new MessageEmbed()
            .setColor(`#2F3136`)
            .setDescription(`Majority of staff voted no, so ${target} will not have their perms revoked.`)
            channel.send({ embeds: [denyembed] });
            break;
        }
      });
    }
}