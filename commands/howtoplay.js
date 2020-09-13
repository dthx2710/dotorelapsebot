exports.run = (client, message, args) => {
  message.channel.send(`https://howdoiplay.com/?${args.join('+')}`);
}