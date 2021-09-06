const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'Server info command',
    async run (message, args, client) {

      //const row = new MessageActionRow()
        //.addComponents(
            //new MessageButton()
                //.setCustomId('primary')
                //.setLink('https://discord.com/api/oauth2/authorize?client_id=866014328464605184&permissions=260348308694&scope=bot')
                //.setLabel('Add Ultra')
                //.setStyle('Link'),
                //new MessageButton()
                //.setCustomId('primary')
                //.setLink('https://discord.gg/YggNMXn3cT')
                //.setLabel('Join Ultra\'s Support Server')
                //.setStyle('Link'),
        //);
  
      let embed = new MessageEmbed()
      .setDescription(`👍 You can either invite the bot or join the support server with the links below.\n\n [Invite Bot](https://discord.com/api/oauth2/authorize?client_id=866014328464605184&permissions=260348308694&scope=bot) [Join Support Server](https://discord.gg/YggNMXn3cT)`)
      .setFooter("You can also help by voting with ?vote", "https://cdn.discordapp.com/avatars/866014328464605184/670f18d681e14fb695b1c33b07f3a339.jpg")
      .setColor('#2f3136')
      await message.reply({ embeds: [embed] });
    }
  }