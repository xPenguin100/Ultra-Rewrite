const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: "remind",
    category: "utility",
    async execute(message, args, client, Discord) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`Please specify the time!`)

        const wrongtime = new MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`Sorry I only do **d, m, h, or s.**`)

        const reminderembed = new MessageEmbed()
            .setColor('#F30B04')
            .setDescription(`What do you want to be reminded of?`)

        if (!args[0]) return message.channel.send({ embeds: [notime] })
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )


            return message.channel.send({ embeds: [wrongtime] })
        if (!reminder) return message.channel.send({ embeds: [reminderembed] })

        const remindertime = new MessageEmbed()
        .setColor('#33F304')
        .setDescription(`${user}, Your reminder will go off in **${time}**`)

        message.channel.send({ embeds: [remindertime] })

        const reminderdm = new MessageEmbed()
        .setColor('#7289DA')
        .setTitle('**REMINDER**')
        .setDescription(`**${time}** has passed! Your reminder is: **${reminder}**`)  

        setTimeout(async function () {
           try{

            await user.send({ embeds: [reminderdm] }) 
           }catch(err){

           } 
           
        }, ms(time));
    }
}