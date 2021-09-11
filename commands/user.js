const { MessageEmbed, Discord, user } = require('discord.js')

module.exports = {
    name: 'user',
    description: 'User info command',
    execute(message) {

      const user = message.mentions.users.first() 
	const author = message.mentions.users.first() || message.author
      const member = message.mentions.members.first() || message.member
      let avatar = author.displayAvatarURL({size: 4096, dynamic: true});
  
      let embed = new MessageEmbed()
      .setAuthor(message.author.tag, user.displayAvatarURL({ dynamic: true}))
      .setDescription(`👤 **${user.username}**\n**Tag:** ${user.tag}\n**ID:** \`${user.id}\`\n**Nickname:** ${member.nickname}\n**Badges:** \`${user.flags.toArray()}\`\n**Joined At**\n**Joined Server:** ${member.joinedAt}\n**Joined Discord:** ${user.createdAt}\n**❓ Other**\n**Bot:** ${user.bot}\n**Roles:** ${GuildMember.roles.toArray()} ${message.member.roles.cache.size}`)
      //.addFields(
        //{ name: 'Name', value: (`${author.username}`), inline: true},
        //{ name: 'Nickname', value: (`${member.nickname}`), inline: true},
        //{ name: 'ID', value: (`${author.id}`), inline: true},
        //{ name: 'Status', value: (`${message.member.presence.status}`), inline: true},
        //{ name: 'Server', value: (`${message.guild.name}`), inline: true},
        //{ name: 'Bot', value: (`${author.bot}`), inline: true},
        //{ name: 'Joined Server', value: (`${member.joinedAt}`)},
        //{ name: 'Joined Discord', value: (`${author.createdAt}`)}
      //)
  
      .setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
      .setTimestamp()
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  }