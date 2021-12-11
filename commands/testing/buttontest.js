const { Discord, MessageEmbed, interaction, MessageActionRow, MessageButton, Interaction } = require('discord.js')

module.exports = {
    name: 'buttontest',
    description: 'Server info command',
    async run (message, args, client) {

        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Invite Bot')
                    .setCustomId('customid1')
                    .setStyle('PRIMARY'),
      );

      if(interaction.isButton()) {
          if(interaction.customId === 'customid1') {
              return message.reply('Hi')
          }
      }
    }
  }