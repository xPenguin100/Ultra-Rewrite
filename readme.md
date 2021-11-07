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
