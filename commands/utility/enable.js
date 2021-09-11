module.exports = {
    name: 'enable',
    description: 'Enable any command!',
    execute(message) {
        const embed = new MessageEmbed()
        .setColor('#2F3136')
        .setDescription('❌ Command is down for maintenance.')

        message.reply({ embeds: [embed] })
    }
}