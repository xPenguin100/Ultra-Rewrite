module.exports = {
    name: 'dm',
    description: 'A developer only command.',
    run: async(client, message, args) => {
        await client.application.fetch()
        if(message.author.id !== client.application.owner.id) await message.reply("I apologize, as this command is developer only.")
        if(message.author.id == client.application.owner.id) {
        let user = message.mentions.users.first()
        if(!user) return message.channel.send('Please mention a user to DM')

        let dm = args.slice(1).join(" ")
        if(!dm) return message.reply("I cannot send an empty message!")
    
        try {
            await user.send(dm)
        } catch (error) {
            return message.reply("The user you mentioned has their DMs closed.")
        }
        message.reply("DM sent!")
    }
    }
}