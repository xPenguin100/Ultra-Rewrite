const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'createrole',
    description: 'Creates a role with the arguments given',
    run: async(message, args) => {
        if(!message.author.permissions.has("MANAGE_ROLES")) return message.reply('You do not have enough permissions to execute this command!')
        let name = args.slice(1).join(" ")
        if(!name) return message.reply('Name is not specified! Please give a valid name for this role.')
        let color = args[2]
        if(!color) color = '#99AAB5'

        message.guild.roles.create({
            data: {
                name: name,
                color: color,
                permissions: [VIEW_CHANNELS, SEND_MESSAGES, READ_MESSAGE_HISTORY],
                mentionable: false,
            }
        })

        const embed = new MessageEmbed()
        .setTitle('Role Successfully Created!')
        .addFields(
            { name: 'Name:', value: `${name}`},
            { name: 'Color:', value: `${color}`},
        )
        .setFooter(`Role Created By: ${message.author}`)
        .setTimestamp()
        message.reply({ embeds: [embed] })
    }
}