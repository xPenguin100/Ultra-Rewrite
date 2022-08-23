const { Discord, MessageEmbed, interaction, MessageActionRow, MessageButton, Interaction } = require('discord.js')

module.exports = {
    name: 'buttontest',
    description: 'Server info command',
    async run (message, args, client) {

        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Invite Bot')
                    .setURL('https://discord.com/oauth2/authorize?client_id=874362123143241811&scope=applications.commands&permissions=2654334174')
					.setStyle('LINK'),
                new MessageButton()
                    .setLabel('Join Ultra\'s Support Server')
                    .setURL('https://discord.gg/YggNMXn3cT')
                    .setStyle('LINK'),
      );

        let embed = new MessageEmbed()
        .setDescription(`Click below to either add Ultra or join Ultra's support server.`)
        .setFooter("You can also help by voting with ?vote", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
        .setColor('#2f3136')

    await message.reply({ embeds: [embed], components: [row] });
    }
  }