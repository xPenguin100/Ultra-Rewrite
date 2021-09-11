const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'Server info command',
    async run (message, args, client) {

      const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel('Add Ultra')
              .setURL('https://top.gg/bot/866014328464605184/vote')
              .setStyle('LINK'),
            new MessageButton()
              .setLabel('Join Ultra\'s Support Server')
              .setURL('https://discord.gg/YggNMXn3cT')
              .setStyle('LINK'),
        );

  
      let embed = new MessageEmbed()
      .setDescription(`You can either invite the bot or join the support server using the links below.`)
      .setFooter("You can also help by voting with ?vote", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
      .setColor('#2F3136')
      await message.reply({ embeds: [embed], components: [row] });
    }
  }