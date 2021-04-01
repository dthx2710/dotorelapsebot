const fs = require('fs');
exports.run = (client, message, args) => {
  if (message.author.id != 69742182558339072){
    message.channel.send(`<@${message.author.id}> ur mum`).catch(console.error);
    return;
  }

  const lastcall = fs.readFileSync('lastdotobocall')

  message.channel.send(`${lastcall} ping one`).catch(console.error);
}