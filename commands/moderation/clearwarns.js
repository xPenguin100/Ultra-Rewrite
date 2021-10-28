const db = require('quick.db')

module.exports = {
    name: 'clearwarns',
    description: 'Reset warns for mentioned user',
    run: async(client, message, args) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply('You cannot execute this! You are missing the `BAN_MEMBERS` permission.')

        let user = message.mentions.users.first() 
        if(!user) return message.reply('Please mention a user so I can clear their warns!')

        if(message.mentions.users.first().bot) return message.reply('Bots cannot have warns, so I can\'t remove an imaginary warn.')
        if(message.author.id === user.id) return message.reply('You are not allowed to reset your own warnings until you can reset other people\'s warnings.')

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if(warnings === null) {
            return message.channel.send(`${message.mentions.users.first().username} do not have any warnings.`)
          }

          db.delete(`warnings_${message.guild.id}_${user.id}`)
          user.send(`Your warnings were cleared by ${message.author.username} from ${message.guild.name}`)
          await message.reply(`Cleared all warnings of ${user}`) //DO NOT FORGET TO USE ASYNC FUNCTION
          


    }
}