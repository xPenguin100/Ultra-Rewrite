const { MessageEmbed, Discord, GuildMember } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'user',
    description: 'User info command',
    execute(message, args) {

      let user = message.mentions.users.first() 
      let member = message.mentions.members.first() || message.member
      let author = message.mentions.users.first() || message.author
      let avatar = message.author.displayAvatarURL({size: 4096, dynamic: true});

      if(!user) return message.reply(`❌ The user either doesn't exist or you never gave a user!`)

      let embed = new MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true}))
      .setDescription(`${user} (\`${user.id}\`)`)
      .addFields(
        { name: 'Joined Server', value: (`${moment.utc(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: 'Joined Discord', value: (`${moment.utc(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: `Roles ${member.roles.cache.size}`, value: (member.roles.cache.map((r) => r).join(", "), false)},
        { name: 'Permissions', value: (member.permissions.toArray())},
        { name: 'Badges', value: (`\`${user.flags.toArray()}\``)},
        { name: 'Nickname', value: (`${member.displayName}`)},
        { name: 'Bot', value: `${user.bot}`},
      )
  
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
      .setTimestamp()
      //.setDescription('❌ Command is down for maintenance.')
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  }