const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'achieve',
    description: 'Achieve',
run: async (client, message, args) => {
const number = args[0];
let text = args.slice(1).join(' ');
if (!number) return message.reply("Provide a number")
if (!text) return message.reply("Provide some text")
let embed = new MessageEmbed()
.setTitle("Advancement Made!")
.setImage(`https://minecraftskinstealer.com/achievement/${number}/Advancement+Made!/${text}`)
.setColor('#2F3136')
.setTimestamp()
message.reply({embeds : [embed]})
    }
}