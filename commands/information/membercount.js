const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'membercount',
    description: 'A command that reveals the members in a server',
    execute(message) {

        const membercount = new MessageEmbed()
        .setColor(`2F3136`)
        .setTitle(`Member and Bot Count`)
        .setDescription(`Member Count: ${message.guild.memberCount}\nHuman Count: ${message.guild.members.cache.filter( m => !m.user.bot).size}\nBot Count: ${message.guild.members.cache.filter( m => m.user.bot).size}`)
        message.reply({ embeds: [membercount] })
    }
}