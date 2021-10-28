const discord = require('discord.js')
const PrefixSchema = require('/Users/homef/Documents/GitHub/Ultra-Rewrite/schema/PrefixSchema')

module.exports = {
    name: 'setprefix',
    description: 'set a new prefix for the server',
    run: async(Client, message, args, prefix) => {

    if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('you don\'t have permission to use this cmd')

    const newprefix = args[0]
    if(!newprefix) return message.channel.send("please provide a new prefix!") 
    if(newprefix.length > 5) return message.channel.send('This prefix is too long, you have max 5 caracters')


    let data;
    try {
        data = await PrefixSchema.findOne({
            _id: message.guild.id
        })
        if(!data) {
            let newdata = await PrefixSchema.create({
                _id: message.guild.id,
                newPrefix: newprefix
            })
            newdata.save()
        } else {
            await PrefixSchema.findOneAndUpdate({
                _id: message.guild.id,
                newPrefix: newprefix,
            })
        }
        message.channel.send(`The Prefix has Been set to ${newprefix}`)
    } catch (err) {
        console.log(err)
    }
    }
}
