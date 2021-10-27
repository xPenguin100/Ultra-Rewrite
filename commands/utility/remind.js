const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "remind",
    category: "utility",
    aliases: ['remindme', 'rm'],
    async execute(message, args, client, Discord) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new MessageEmbed()
            .setColor('#2F3136')
            .setDescription(`Please specify the time!`)

        const wrongtime = new MessageEmbed()
            .setColor('#2F3136')
            .setDescription(`Sorry, I only do **d, m, h, or s.**`)

        const reminderembed = new MessageEmbed()
            .setColor('#2F3136')
            .setDescription(`What do you want to be reminded of?`)

        if (!args[0]) return message.reply({ embeds: [notime] })
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.reply({ embeds: [wrongtime] })
        if (!reminder) return message.reply({ embeds: [reminderembed] })

        const remindertime = new MessageEmbed()
        .setColor('#2F3136')
        .setDescription(`${user}, reminder set! Your reminder will go off in **${time}.**`)

        message.reply({ embeds: [remindertime] })

        const reminderdm = new MessageEmbed()
        .setColor('#2F3136')
        .setTitle('**Reminder**')
        .setDescription(`**${time}** has passed! Your reminder is: **${reminder}**`)  

        setTimeout(async function () {
           try{

            await user.send({ embeds: [reminderdm] }) 
           }catch(err){

           } 
           
        }, ms(time));
    }
}