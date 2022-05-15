const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "8ball",
    description: "8ball command",

    async run (message, args) {
        let replies = ["yes.", "try again in 10 seconds.", "Outlook seems good.", "of course.", "Yes, definitely.", "no.", "Better not tell you now.", "Outlook is not so good..", "nah", "never", "Cannot predict now.", "I dont know.", "I dont know *yet*...", "not a chance.", "I think so.", "only for today!", "not for today c:", "sadly yes..", "sadly no..", "maybe!", "ask again.. later.."];
        
        let question = args.slice().join(" ");
        if(!question) message.channel.send('Please state a question.')
        let result = Math.floor((Math.random() * replies.length));

        let embed = new MessageEmbed()
        .setAuthor({ name: `🎱 ${message.author.username}`, url: "", iconURL: "" })
        .setColor("#2F3136")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send({ embeds: [embed] });
    }
}