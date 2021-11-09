const { MessageEmbed } = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'helptest',
    description: 'Help',
    run: async(Client, message, args) => {
        const page1 = new MessageEmbed()
        .setTitle('Utility')
        .setDescription('Test')
        .setColor('#2F3136')

        const page2 = new MessageEmbed()
        .setTitle('Moderation')
        .setDescription('TEST')
        .setColor('#2F3136')

        const pages = [
            page1,
            page2
        ]
        const emoji = ['⏪', '⏩']
        const timeout = '100000'

        pagination(message, pages, emoji, timeout)
    }
}