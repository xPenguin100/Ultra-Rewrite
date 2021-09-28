const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'achieve',
    description: 'Achieve',
run: async (client, message, args) => {
const number = args[0];
const text = args.slice(1).join(' ').join('+');
if (!number) return message.reply("Provide a number")
if (!text) return message.reply("Provide some text")
let embed = new MessageEmbed()
.setTitle("Advancement Made!")
.setImage(`https://minecraftskinstealer.com/achievement/${number}/Advancement+Made!/${text}`)
.setColor('#2e3137')
.setTimestamp()
message.reply({embeds : [embed]})
    }
}