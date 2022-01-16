const { MessageEmbed } = require('discord.js')
const ms = require('ms')
const timestamp = require('discord-timestamp')

module.exports = {
    name: 'gstart',
    description: 'Giveaway command',
    async run(client, message){

if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("You cannot use this command.")
              const prefix = '?'
              const args = message.content.slice(prefix.length).trim().split(/ +/);

                  let time = args[1]
                  if (!time) return message.reply('You did not specify a time!');
          
                  if (
                      !args[1].endsWith("d") &&
                      !args[1].endsWith("h") &&
                      !args[1].endsWith("m") &&
                      !args[1].endsWith("s") 
                  )
                      return message.reply('You need to use d (days), h (hours), m (minutes), or s (seconds)')
          
                      let gchannel = message.mentions.channels.first();
                      if (!gchannel) return message.reply("Specify a channel please!")
          
                      let prize = args.slice(3).join(" ")
                      if (!prize) return message.reply('Argument missing. What is the prize?')
          
                      message.delete()
                      gchannel.send("🎉 **NEW GIVEAWAY** 🎉")
                      let gembed = new MessageEmbed()
                          .setTitle("New Giveaway!")
                          .setDescription("React with 🎉 to enter the giveaway!")
                          .addField("Prize:", `**${prize}**`)
                          .addField("Duration:", `**${time}** (${timestamp(args[1])})`)
                          .addField(`Hosted By:`, `**${message.author}**`)
                          .setTimestamp(Date.now + ms(args[1]))
                          .setColor('#2F3136')
                      let n = await gchannel.send({ embeds: [gembed] })
                      n.react("🎉")
                      setTimeout(() => {
                          if(n.reactions.cache.get("🎉").count <= 1) {
                              return gchannel.send("Not enough people for me to draw a winner!")
                          }
          
                          let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                          n.reply(`Congratulations ${winner}! You won the **${prize}**!`
                          );
                      }, ms(args[1]));
            }
          }