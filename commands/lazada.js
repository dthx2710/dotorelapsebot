const fs = require('fs');
exports.run = (client, message, args) => {  

  const call = `${message.author.username} (${message.author.id}) @ ${new Date()+8}`

  const roleId = "222372879784738826"
  
  message.delete();
  message.channel.send(`Ready for Lahzhada :one::one: eleven   :elephant:elephant? <@&${roleId}>`, {files:["https://cdn.discordapp.com/attachments/221992979441647616/785491693372702750/3ca5136f-ca94-4eee-b03d-f89576c6ea16.png"]})
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Double elephant :elephant::elephant: at lazada :musical_note:`)
    }, 2000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Bonus price :moneybag: Bonus price :moneybag: add to cart :shopping_cart: :musical_note:`)
    }, 4000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Double elephant :elephant::elephant: at lazada :musical_note:`)
    }, 6000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Bonus price :moneybag: Bonus price :moneybag: with Lahzhada :musical_note:`)
    }, 8000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`Addu tu cartu nao :shopping_cart:`, {files:["https://media1.tenor.com/images/61c333e30b69c33b356517c90289e430/tenor.gif?itemid=19160696"]})
    }, 10000)
  )
  .catch(console.error);
}