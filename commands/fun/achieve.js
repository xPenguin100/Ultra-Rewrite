const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'achieve',
    description: 'Achieve something!',
run: async (client, message, args) => {

const number = args[0];
const text = args.slice(1).join(' ');
if (!number) return message.reply("Provide a number")
if (!text) return message.reply("Provide some text")
fetch(`https://minecraftskinstealer.com/achievement/${number}/Advancement+Made!/${text}`)
.then((res) => res.json())
.then((data) => {
let embed = new MessageEmbed()
.setTitle("Advancement Made!")
.setImage(data.message)
.setColor('#2e3137')
.setTimestamp()
message.reply({embeds : [embed]})
        })
    }
}