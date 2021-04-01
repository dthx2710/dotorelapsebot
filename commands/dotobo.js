const fs = require('fs');
exports.run = (client, message, args) => {  

  const call = `${message.author.username} (${message.author.id}) @ ${new Date()+8}`

  const roleId = "222372879784738826"
  const imgUrl = "https://cdn.glitch.com/b5c50085-c44c-4a6d-919a-c9dc9a6994dd%2Fdota-2-logo-A8CAC9B4C9-seeklogo.com.png?v=1599392528774"

  fs.writeFileSync('lastdotobocall', call)
  
  message.delete();
  if (message.author.id == 195219617734459394){
    message.channel.send(`RX MUM ASK DOTOBO <@&${roleId}>`, {files:["https://cdn.discordapp.com/attachments/221992979441647616/826702415935832104/dotobo_oppa_ver.jpg"]}).catch(console.error);
  }
  else{
    message.channel.send(`YAHALLO DOTOBO <@&${roleId}>`, {files:["https://cdn.discordapp.com/attachments/221992979441647616/826702415935832104/dotobo_oppa_ver.jpg"]}).catch(console.error);
    return;
  }
  //aids id: 222372879784738826
}