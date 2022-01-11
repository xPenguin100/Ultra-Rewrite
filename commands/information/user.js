const { MessageEmbed } = require('discord.js')
const timestamp = require('discord-timestamp')

module.exports = {
    name: 'user',
    description: 'User info command',
    execute(message) {

//message.guild.members.cache.get - Use for getting info using ID
      let user = message.mentions.users.first() 
      let member = message.mentions.members.first() || message.member
      let permissions = message.member.permissions.toArray((r) => r).join(", ")
      let roles = member.roles.cache.size
      if(roles > 30) roles = "Too many roles"

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
      .setAuthor({ name: `${user.tag}`, url: "", iconURL: `${user.displayAvatarURL({ dynamic: true })}` })       
      .setDescription(`${user} (\`${user.id}\`)`)
      .addFields(
        //{ name: 'Joined Server', value: (`${moment.utc(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        //{ name: 'Joined Discord', value: (`${moment.utc(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: 'Joined Server', value: (`<t:${timestamp(member.joinedAt)}:R>`), inline: true},
        { name: 'Joined Discord', value: (`<t:${timestamp(user.createdAt)}:R>`), inline: true},

      )  
      .addField(`Roles [${member.roles.cache.size}]`, member.roles.cache.map((r) => r).join(", "), false)  
      .addField("Badges", `\`${flags.length ? flags.map(flag => flags[flag]).join(', ') : 'None'}\``,true)
      .addField(`Permissions`, `\`${permissions}\``)
      .setFooter({ text: `${message.author.tag}`, url: "", iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
      .setTimestamp()
      //.setDescription('❌ Command is down for maintenance.')
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  }