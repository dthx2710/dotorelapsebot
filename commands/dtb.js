const fs = require('fs');
exports.run = (client, message, args) => {  

  const roleId = "222372879784738826"
  const imgUrl = "https://cdn.glitch.com/b5c50085-c44c-4a6d-919a-c9dc9a6994dd%2Fdota-2-logo-A8CAC9B4C9-seeklogo.com.png?v=1599392528774"
  const channelId = "221992979441647616"
  
  message.delete();
  client.channels.cache.get(channelId).send(`YAHALLO DOTOBO <@&${roleId}>`, {files:["https://cdn.discordapp.com/attachments/221992979441647616/826702415935832104/dotobo_oppa_ver.jpg"]}).catch(console.error);
  //aids id: 222372879784738826
}