module.exports = {
    name: 'enable',
    description: 'Enable any command!',
    execute(message) {
        const embed = new MessageEmbed()
        .setColor('#2F3136')
        .setDescription('🤫 This command is being worked on...')

        message.reply({ embeds: [embed] })
    }
}