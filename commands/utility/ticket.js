const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, cmd, client, discord) {
      const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    
      channel.permissionOverwrites.edit(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false,
      });
      channel.permissionOverwrites.edit(message.author, {
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true,
      });

      const supportMessage = new MessageEmbed()
      .setColor(`2F3136`)
      .setDescription(`Thank you for contacting support! Our support team will be right with you. In the meantime, can you list the reason for this ticket and any other comments you may have.`)
      const reactionMessage = await channel.send({ embeds: [supportMessage] });
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector((reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).permissions.has("ADMINISTRATOR"),{ dispose: true, time: 15000 });
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            const deleteembed = new MessageEmbed()
            .setColor(`#2F3136`)
            .setDescription(`Deleting this channel in **5 seconds!**`)
            channel.send({ embeds: [deleteembed] });
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
      
      const preticketmessage = new MessageEmbed()
      .setColor(`2F3136`)
      .setDescription(`We will be right with you! ${channel}`)

      message.reply({ embeds: [preticketmessage] })
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };