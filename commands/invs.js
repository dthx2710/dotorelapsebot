const fs = require('fs');
exports.run = (client, message, args) => {  
  const lastcall = String(fs.readFileSync('lastdotobocall'))
  const userid = lastcall.split(" ")[1].slice(1,-1)
  
  message.channel.send(`<@${userid}> You may be well respected as our core player, however please be mindful we have a /dotobo then you invite policy.`).catch(console.error);
}