const { MessageEmbed, Discord, GuildMember } = require('discord.js')
const moment = require('moment')
const timestamp = require('discord-timestamp')

module.exports = {
    name: 'user',
    description: 'User info command',
    execute(message, args) {

//message.guild.members.cache.get - Use for getting info using ID
      let user = message.mentions.users.first() 
      let member = message.mentions.members.first() || message.member
      let author = message.mentions.users.first() || message.author
      let avatar = message.author.displayAvatarURL({size: 4096, dynamic: true});
      let permissions = message.member.permissions.toArray((r) => r).join(", ")
      const perms = {
        CREATE_INSTANT_INVITE: 'Create Invite', 
        KICK_MEMBERS: 'Kick Members', 
        BAN_MEMBERS: 'Ban Members', 
        ADMINISTRATOR: 'Admin', 
        MANAGE_CHANNELS: 'Manage Channels', 
        MANAGE_GUILD: 'Manage Server', 
        ADD_REACTIONS: 'Add Reactions', 
        VIEW_AUDIT_LOG: 'View Audit Log', 
        PRIORITY_SPEAKER: 'Priority Speaker', 
        STREAM: 'Stream',
        VIEW_CHANNEL: 'View Channels', 
        SEND_MESSAGES: 'Send Messages', 
        SEND_TTS_MESSAGES: 'Send TTS Messages', 
        MANAGE_MESSAGES: 'Manage Emojis', 
        EMBED_LINKS: 'Embed Links', 
        ATTACH_FILES: 'Attach Files', 
        READ_MESSAGE_HISTORY: 'Read Message History', 
        MENTION_EVERYONE: 'Mention Everyone', 
        USE_EXTERNAL_EMOJIS: 'Use External Emojis', 
        VIEW_GUILD_INSIGHTS: 'View Guild Insights', 
        CONNECT: 'Connect', 
        SPEAK: 'Speak', 
        MUTE_MEMBERS: 'Mute Members', 
        DEAFEN_MEMBERS: 'Deafen Members', 
        MOVE_MEMBERS: 'Move Members', 
        USE_VAD: 'Use VAD', 
        CHANGE_NICKNAME: 'Change Nickname', 
        MANAGE_NICKNAMES: 'Manage Nicknames', 
        MANAGE_ROLES: 'Manage Roles', 
        MANAGE_WEBHOOKS: 'Manage Webhooks', 
        MANAGE_EMOJIS_AND_STICKERS: 'Manage Emojis & Stickers', 
        USE_APPLICATION_COMMANDS: 'Use Slash Commands', 
        REQUEST_TO_SPEAK: 'Request to Speak', 
        MANAGE_THREADS: 'Manage Threads', 
        USE_PUBLIC_THREADS: 'View Public Threads', 
        USE_PRIVATE_THREADS: 'View Private Threads', 
        USE_EXTERNAL_STICKERS: 'Use External Stickers'
      }
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
        //{ name: 'Joined Server', value: (`${moment.utc(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        //{ name: 'Joined Discord', value: (`${moment.utc(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`), inline: true},
        { name: 'Joined Server', value: (`<t:${timestamp(member.joinedAt)}:R>`), inline: true},
        { name: 'Joined Discord', value: (`<t:${timestamp(user.createdAt)}:R>`), inline: true},

      )  
      .addField(`Roles [${member.roles.cache.size}]`, member.roles.cache.map((r) => r).join(", "), false)  
      .addField("Badges", `\`${flags.length ? flags.map(flag => flags[flag]).join(', ') : 'None'}\``,true)
      .addField(`Permissions`, `\`${permissions}\``)
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
      .setTimestamp()
      //.setDescription('❌ Command is down for maintenance.')
      .setColor('#2F3136')
      message.channel.send({ embeds: [embed] });
    }
  }