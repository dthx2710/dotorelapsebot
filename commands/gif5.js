const fs = require('fs');
exports.run = (client, message, args) => {

  const imgUrl = "https://cdn.discordapp.com/attachments/221992979441647616/975253546595397712/gif5.png"

  const roleId = "222372879784738826"
  
  message.channel.send(`gif5`, {files:["https://cdn.discordapp.com/attachments/221992979441647616/975253546595397712/gif5.png"]}).catch(console.error);
    return;
}