client.on("messageCreate", message => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(client.user.id)) {
      message.channel.send("Hey! I am Ultra. My prefix is `?`, or you can use `?help` for help!");
  };
});

      if(user.id === message.guild.ownerId) - Checks if you used owners id in mention or something else
      if(appreciations === 3) - If the variable = 3, return an argument

        let days = Math.floor(message.client.uptime / 86400000);
        let hours = Math.floor(message.client.uptime / 3600000) % 24;
        let minutes = Math.floor(message.client.uptime / 60000) % 60;
        let seconds = Math.floor(message.client.uptime / 1000) % 60;
                    { name: 'Uptime', value: `${days}:${hours}:${minutes}:${seconds}`, inline: true},

client.on('messageReactionAdd', async (message, reaction, user) => {
  const handleStarboard = async () => {
      const SBChannel = message.guild.channels.cache.find(channel => channel.name.toLowerCase() === '⭐┃starboard');
      const msgs = await SBChannel.messages.fetch({ limit: 100 });
      const SentMessage = msgs.find(msg => 
          msg.embeds.length === 1 ?
          (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
      if(SentMessage) SentMessage.edit(`${reaction.count} - ⭐`);
      else {
          const embed = new MessageEmbed()
          .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
          .setDescription(`**[Jump to the message](${reaction.message.url})**\n\n${reaction.message.content}\n`)
          .setColor('#2F3136')
          .setFooter(reaction.message.id)
          .setTimestamp();
          if(SBChannel)
          SBChannel.send({ embeds: [embed] });
      }
  }
  if(message.reaction.emoji.name === '⭐') {
      if(reaction.message.channel.name.toLowerCase() === '⭐┃starboard') return;
      if(reaction.message.partial) {
          await reaction.fetch();
          await reaction.message.fetch();
          handleStarboard();
      }
      else
      handleStarboard();
  }
});
