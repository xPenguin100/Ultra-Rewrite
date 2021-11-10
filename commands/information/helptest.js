const { MessageEmbed } = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'helptest',
    description: 'Help',
    run: async(Client, message, args) => {

        const homeembed = new MessageEmbed()
        .setTitle('Ultra Help')
        .setDescription('TEST')
        .setColor('NAVY')
        let m = message.reply({ embeds: [homeembed] }).then(m => {
        try {
            await m.react("⏪");
            await m.react("⏩");
          } catch (err) {
            message.reply("Error sending emojis!");
            throw err;
          }
        })
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

        const collector = reactionMessage.createReactionCollector((reaction, user));
  
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "⏪":
              m.edit({ embeds: [page1] })
              break;
            case "⏩":
              const deleteembed = new MessageEmbed()
              .setColor(`#2F3136`)
              .setDescription(`Deleting this channel in **5 seconds!**`)
              message.reply({ embeds: [deleteembed] })
              break;
          }
        });       

    }
}