const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'help-copy',
    description : "Display current help information.",
    execute(message) {
      
        let embed = new MessageEmbed()
        .setAuthor({ name: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })        
        .addFields(
          { name: '`🔧` **Utility**', value: ("<:reply:892128214112149574> `?help utility`"), inline: true},
          { name: '`😄` **Fun**', value: ("<:reply:892128214112149574> `?help fun`"), inline: true},
          { name: '`🐶` **Animals**', value: ("<:reply:892128214112149574> `?help animals`"), inline: true},
          { name: '`🔨` **Moderation**', value: ("<:reply:892128214112149574> `?help moderation`"), inline: true},
          { name: '`📋` **Information**', value: ("<:reply:892128214112149574> `?help info`"), inline: true},
        )

        .setFooter({ text: `text`, url: "", iconURL: `url` })
        .setTimestamp()
        .setColor('#2F3136')
        message.channel.send({ embeds: [embed] });
    }
}