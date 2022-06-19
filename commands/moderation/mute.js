const { MessageEmbed }= require('discord.js')
const ms = require('ms')

module.exports = {
    name: 'mute',
    description: 'Mute a specified member with a reason.',
    run: async(message, args) => {

        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('You do not have permission to use this command! You are missing the `MANAGE_MESSAGES` permission.')
        let member = message.mentions.members.first() 
        if(!member) return message.reply('You never mentioned anyone for me to mute!')

        let duration = args[1]
        if(!duration) return message.reply('How long should this user be muted for? \`?mute <@user> <reason> <time>\`')

        if (
            !args[1].endsWith("d") &&
            !args[1].endsWith("h") &&
            !args[1].endsWith("m") &&
            !args[1].endsWith("s") 
        )
            return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds) to specify the ban duration!')


        let reason = args.slice(2).join(" ");
        if (!reason) reason = "No reason.";
        if(!args[0]) return message.channel.send('You have not specified any arguments or the member is not found.')
        let role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted') 
        let mutedrole;
        if(!role) {
            try {
                message.channel.send('Muted role is not found... attempting to create muted role.')

                mutedrole = await message.guild.roles.create({
                        name: 'Muted',
                        color: 'RED',
                        permissions: []
                });
                message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').forEach(async (channel, id) => {
                    await channel.permissionOverwrites.edit(mutedrole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                message.reply('Unable to create muted role, or another role by a similar name is already created.')
                console.log(error)
            }
        };

        if(member.roles.cache.has(role => role.name === 'Muted')) return message.reply(`${member.username} has already been muted.`)
        if(role) {
            member.roles.add(role)
        } else {
            if(!role) member.roles.add(mutedrole)
        }
        const embed = new MessageEmbed()
        .setTitle("🔇 Mute Successful!")
        .setColor("#2F3136")
        .addFields(
            { name: 'Member Muted:', value: `${member}`},
            { name: 'Duration:', value: `${duration}`},
            { name: 'Reason:', value: `${reason}`},
            { name: 'Moderator:', value: `${message.author}`}
        )
        message.reply({ embeds: [embed] })  
        setTimeout(async () => {
            if(member.roles.cache.has(role => role.name === 'Muted')) return message.reply(`${member.username} has already been muted!`)
            if(role) {
                member.roles.remove(role)
            } if(!role) member.roles.remove(mutedrole)
            return message.reply(`${member} has successfully been unmuted. Welcome back!`)
        }, ms(args[1]))
        }
    }
