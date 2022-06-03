module.exports = {
    name: "shutdown-beta",
    description: 'Shutdown the bot ONLY in case of emergencies and to be used by admins...',
    run: async(client, message) => {

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("This command is too powerful to be handled by non-admins.")
        if(message.member.permissions.has("ADMINISTRATOR")){

            const m = await message.reply('Are you **SURE** you want to do this? This action is irreversal and the bot will be offline on all servers until the developer puts it back online.')
            try {
                await m.react("👍");
                await m.react("👎");
            } catch (err) {
                message.channel.send("Error sending reactions!")
                throw err
            }

            const collector = m.createReactionCollector({ dispose: true, time: 15000 })

            collector.on("collect", (reaction, user) => {
                switch(reaction.emoji.name) {
                    case "👍":
                        message.reply("You asked for this...")
                        client.destroy()
                    case "👎": 
                        message.reply("Phew! You scared me there.")
                        break;
                }
            })
        }
    }
}