  const { MessageEmbed } = require('discord.js')
  
  module.exports = {
  name: "timeout",
  description: "A timeout command",
  run: async (message, args) => {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.reply("You don't have high enough permissions.");
    if (!message.guild.me.permissions.has("KICK_MEMBERS"))
      return message.reply("I don't have high enough permissions.");

    let target = message.mentions.members.first();
    if (!target) return message.reply("Please mention someone to timeout!");

    let duration = args[1]; //.then(ms(args[1]))
    if (!duration) return message.reply("Please specify a duration!");
    if (
      !args[1].endsWith("d") &&
      !args[1].endsWith("m") &&
      !args[1].endsWith("h") &&
      !args[1].endsWith("s")
    )
      return message.reply("Invalid form for duration argument!");

    let reason = args.splice(2).join(" ");
    if (!reason) reason = "No reason.";

    const timer = ms(duration);

    let timeouttarget = message.guild.members.cache.get(target.id);
    let timeouttimestamp = timeouttarget.communicationDisabledUntilTimestamp;
    if (target.isCommunicationDisabled())
      return message.reply("This member is already timed-out.");
    //timeouttarget.timeout(parseInt(args[1]))
    timeouttarget.timeout(timer, reason);

    const embed = new MessageEmbed()
      .setTitle(":stopwatch: Member Timed-Out")
      .addFields(
        { name: "Member Timed-out", value: `${target}` },
        { name: "Duration", value: `${duration} (${timeouttimestamp})` },
        { name: "Reason", value: `${reason}` }
      )
      .setColor(`2F3136`);

    message.reply({ embeds: [embed] });

    setTimeout(async () => {
      message.reply(`${target}'s timeout has ended.`);
    }, ms(duration));
  },
};