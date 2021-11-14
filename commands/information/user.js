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
      const flags = {
        DISCORD_EMPLOYEE: 'Discord Employee',
        DISCORD_PARTNER: 'Discord Partner',
        BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
        BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
        HYPESQUAD_EVENTS: 'HypeSquad Events',
        HOUSE_BRAVERY: 'House of Bravery',
        HOUSE_BRILLIANCE: 'House of Brilliance',
        HOUSE_BALANCE: 'House of Balance',
        EARLY_SUPPORTER: 'Early Supporter',
        TEAM_USER: 'Team User',
        SYSTEM: 'System',
        VERIFIED_BOT: 'Verified Bot',
        VERIFIED_DEVELOPER: 'Verified Bot Developer'
    };

      if(!user) user = message.author 

      let embed = new MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL({ dynamic: true}))
      .setDescription(`${user} (\`${user.id}\`)`)
      .addFields(
        { name: 'Joined Server', value: (`${moment.utc(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: 'Joined Discord', value: (`${moment.utc(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
      )  
      .addField(`Roles [${member.roles.cache.size}]`, member.roles.cache.map((r) => r).join(", "), false)  
      .addField(`Permissions`, `\```${message.member.permissions.toArray((r) => r).join(", ")}\````)
      .addField("Badges", `\`${flags.length ? flags.map(flag => flags[flag]).join(', ') : 'None'}\``,true)
      .addField(`Nickname`, `${member.displayName}`)
      .addField(`Bot`, `${user.bot}`)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
      .setTimestamp()
      //.setDescription('❌ Command is down for maintenance.')
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  }