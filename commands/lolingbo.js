const fs = require('fs');
exports.run = (client, message, args) => {  

  const call = `${message.author.username} (${message.author.id}) @ ${new Date()+8}`

  const roleId = "222372879784738826"
  const imgUrl = "https://cdn.glitch.com/b5c50085-c44c-4a6d-919a-c9dc9a6994dd%2Fdota-2-logo-A8CAC9B4C9-seeklogo.com.png?v=1599392528774"
  
  message.delete();
  message.channel.send(`loling bo? <@&${roleId}>`, {files:["https://cdn.discordapp.com/attachments/221992979441647616/777573442441707530/8997ddad11a4f69ff2a7816b3d698fde.jpg"]}).catch(console.error);
  //aids id: 222372879784738826
}