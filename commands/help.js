const fs = require('fs');
exports.run = (client, message, args) => {  

  const call = `${message.author.username} (${message.author.id}) @ ${new Date()+8}`
  

  message.channel.send(`help urself la fkin nerd`).catch(console.error);
}