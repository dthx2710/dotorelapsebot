const fs = require('fs');
exports.run = (client, message, args) => {  

  const call = `${message.author.username} (${message.author.id}) @ ${new Date()+8}`

  const roleId = "222372879784738826"

  fs.writeFileSync('lastdotobocall', call)
  
  message.delete();
  message.channel.send(`PQing bo lakelis waiting<@&${roleId}>`, {files:["https://cdn.discordapp.com/attachments/235297233275191296/777174646859759616/NPC_Lakelis.png"]}).catch(console.error);
}