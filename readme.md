client.on("messageCreate", message => {
  if (message.author.bot) return false;

  if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

  if (message.mentions.has(client.user.id)) {
      message.channel.send("Hey! I am Ultra. My prefix is `?`, or you can use `?help` for help!");
  };
});

      if(user.id === message.guild.ownerId) - Checks if you used owners id in mention or something else
      if(appreciations === 3) - If the variable = 3, return an argument