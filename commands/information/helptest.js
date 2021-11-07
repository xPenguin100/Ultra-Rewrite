const { MessageActionRow, MessageSelectMenu, MessageEmbed, Discord } = require('discord.js')

module.exports = {
    name: 'helptest',
    description: 'Help testing command',
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle('Testing COmmand')
        .setDescription('HI')
        .setColor('NAVY')
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId('test')
            .addOptions([
                {
                    label: 'Select me',
                    description: 'This is a description',
                    value: 'first_option',
                },
                {
                    label: 'You can select me too',
                    description: 'This is also a description',
                    value: 'second_option',
                },
            ]),

            message.reply({ embeds: [embed], components: [row] })
        )
    }
}