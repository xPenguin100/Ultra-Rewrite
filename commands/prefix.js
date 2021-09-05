module.exports = {
	name: 'prefix',
	description: 'Ping!',
	execute(message) {
		message.reply('you can either ping me, or flat out use my prefix which is `%`!');
	},
};