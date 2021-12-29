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
      .setFooter({ text: `By voting, you are helping us out!`, url: "", iconURL: `https://cdn.discordapp.com/avatars/866014328464605184/72c775766580ff595772615562a3653c.png` })
      .setColor('#2F3136')
      await message.reply({ embeds: [embed], components: [row] });
    }
  }