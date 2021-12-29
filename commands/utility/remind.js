const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "remind",
    category: "utility",
    aliases: ['remindme', 'rm'],
    async execute(message, args) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        if (!args[0]) return message.reply("You need to specify a duration so I can remind you after that is up.")
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.reply("Sorry, for duration, only \"**d, h, m, s**\" are accepted.")
        if (!reminder) return message.reply("Please specify what you want to be reminded of!")

        message.reply(`${user}, your reminder has been set. I will remind you in ${time}.`)

        const reminderdm = new MessageEmbed()
        .setColor('#2F3136')
        .setTitle('**Reminder**')
        .setDescription(`${time} ago, you asked to be reminded of "${reminder}"".`)  

        setTimeout(async function () {
           try{

            await user.send({ embeds: [reminderdm] }) 
          }catch(err){
            throw(err)
           } 
           
        }, ms(time));
    }
}