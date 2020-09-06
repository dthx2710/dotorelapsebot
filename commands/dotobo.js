exports.run = (client, message, args) => {
  message.delete();
  const roleId = "222372879784738826"
  const imgUrl = ""
  message.channel.send(`doto bo? <@&${roleId}>`, {files:["https://cdn.glitch.com/b5c50085-c44c-4a6d-919a-c9dc9a6994dd%2Fdota-2-logo-A8CAC9B4C9-seeklogo.com.png?v=1599392528774"]}).catch(console.error);
  //aids id: 222372879784738826
  
}