const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: 'vote',
    description: 'Server info command',
    async run (message) {

      const row = new MessageActionRow()
          .addComponents(
            new MessageButton()
              .setLabel('Vote for Ultra')
              .setURL('https://top.gg/bot/866014328464605184/vote')
              .setStyle('LINK'),
        );

  
      let embed = new MessageEmbed()
      .setDescription(`Click below to vote for Ultra.`)
      .setFooter("By voting, you are helping us out!", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
      .setColor('#2F3136')
      await message.reply({ embeds: [embed], components: [row] });
    }
  }