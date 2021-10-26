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
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`👤 **${user.username}**\n**Tag:** ${user.tag}\n**ID:** \`${user.id}\`\n**Nickname:** ${member.nickname}\n**Badges:** \`${user.flags.toArray()}\`\n**Joined At**\n**Joined Server:** ${member.joinedAt}\n**Joined Discord:** ${user.createdAt}\n**❓ Other**\n**Bot:** ${user.bot}\n**Roles:** ${message.member.roles.cache.size} ${message.member.roles.cache.size}`)
      .addFields(
        { name: 'Name', value: (`${author.username}`), inline: true},
        { name: 'Nickname', value: (`${member.displayName}`), inline: true},
        { name: 'ID', value: (`${author.id}`), inline: true},
        { name: 'Status', value: (`${message.member.presence.status}`), inline: true},
        { name: 'Server', value: (`${message.guild.name}`), inline: true},
        { name: 'Bot', value: (`${author.bot}`), inline: true},
        { name: 'Joined Server', value: (`${moment.utc(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`)},
        { name: 'Joined Discord', value: (`${moment.utc(author.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`)}
      )

      let userembed = new MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true}))
      .setDescription(`${user} (\`${user.id}\`)`)
      .addFields(
        { name: 'Joined Server', value: (`${moment.utc(member.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: 'Joined Discord', value: (`${moment.utc(user.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: 'Badges', value: (`\`${user.flags.toArray()}\``)},
        { name: 'Nickname', value: (`${member.displayName}`)},
        { name: 'Bot', value: `${user.bot}`},

      )
  
      .setFooter(`${message.author.displayAvatarURL({ dynamic: true})} Requested by: ${author.tag}`)
      .setTimestamp()
      //.setDescription('❌ Command is down for maintenance.')
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed, userembed] });
    }
  }

  //const { MessageEmbed, user } = require('discord.js')

  //module.exports = {
      //name: 'user',
      //description: 'User info command',
      //(message) {
    
    
        //const Discord = require('discord.js')
        //const author = message.mentions.users.first() || message.author
        //const member = message.mentions.members.first() || message.member
        //let avatar = author.displayAvatarURL({size: 4096, dynamic: true});
    
        //let embed = new MessageEmbed()
        //.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        //.setDescription(`👤 **${message.author.username}**\n**Tag:** ${message.author.tag}\n**ID:** \`${message.author.id}\`\n**Nickname:** ${member.nickname}\n**Badges:** \`${author.flags.toArray()}\`\n**Bot:** ${author.bot}\n**Joined At**\n**Joined Server:** ${member.joinedAt}\n**Joined Discord:** ${author.createdAt}\n**❓ Other**\n**Bot:** ${author.bot}\n**Roles:** ${message.member.roles.cache.size}`)
        //.addFields(
         // { name: 'Name', value: (`${author.username}`), inline: true},
         // { name: 'Nickname', value: (`${member.nickname}`), inline: true},
          //{ name: 'ID', value: (`${author.id}`), inline: true},
         // { name: 'Status', value: (`${message.member.presence.status}`), inline: true},
         // { name: 'Server', value: (`${message.guild.name}`), inline: true},
         // { name: 'Bot', value: (`${author.bot}`), inline: true},
         // { name: 'Joined Server', value: (`${member.joinedAt}`)},
          //{ name: 'Joined Discord', value: (`${author.createdAt}`)}
       // )
    
        //.setFooter("Made with Ultra", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
        //.setTimestamp()
       // .setColor('#2F3136')
       // message.channel.send({ embeds: [embed] });
      //}
    //}