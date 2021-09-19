client.on('messageCreate', async message => {
  let args = message.content.substring(prefix.length).split(" ")
  if (message.member.permissions.has("MANAGE_MESSAGES")) {
  if (message.content.startsWith(`${prefix}gstart`)) {

    let gchannel = message.mentions.channels.first();
    if (!gchannel) return message.channel.send("Please mention a channel!")

      let time = args[1]
      if (!time) return message.channel.send('You did not specify a time!');

      if (
          !args[1].endsWith("d") &&
          !args[1].endsWith("h") &&
          !args[1].endsWith("m") &&
          !args[1].endsWith("s") 
      )
          return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds) for time.')

      let claimtime = args[2]
      if (!claimtime) return message.channel.send('You did not specify the claim time!')

      if (
        !args[2].endsWith("d") &&
        !args[2].endsWith("h") &&
        !args[2].endsWith("m") &&
        !args[2].endsWith("s")
      )
          return message.reply("You need to use d (days), h (hours), m (minutes), or s (seconds) for claimtime.")

          let prize = args.slice(4).join(" ")
          if (!prize) return message.channel.send('Arguement missing. What is the prize?')

          message.delete()
          let gembed = new MessageEmbed()
              .setTitle("New Giveaway!")
              .setDescription(`**Prize:** ${prize}\n**Duration:** ${time}\n**Claimtime:** ${claimtime}\n**Hosted By:** ${message.author}`)
              .setTimestamp(Date.now + ms(args[1]))
              .setColor(`2F3136`)
          let n = await gchannel.send({ embeds: [gembed] })
          n.react("🎉")
          setTimeout(() => {
              if(n.reactions.cache.get("🎉").count <= 1) {
                  return message.channel.send("Not enough people for me to draw a winner!")
              }

              let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
              gchannel.send(`Congratulations ${winner}! You just won the **${prize}**!`
              );
          }, ms(args[1]));
  }
}
})