const fs = require('fs');
exports.run = (client, message, args) => {  

  const call = `${message.author.username} (${message.author.id}) @ ${new Date()+8}`

  const roleId = "222372879784738826"
  
  message.delete();
  message.channel.send(`R u Redi for Shoppi Nai Nai?? :nine::nine::older_woman: <@&${roleId}>`, {files:["https://www.brandbuffet.in.th/wp-content/uploads/2021/08/hyunbin-jackie-chan-shopee-lazada.jpg"]})
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Shopi-pi-pi-pi-pi-pi :musical_note:`)
    }, 2000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Nai nai :nine::nine::older_woman: super shoppin day :musical_note:`)
    }, 4000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Bai evritin on shoppi shoppi :musical_note:`)
    }, 6000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`:musical_note: Nai nai :nine::nine::older_woman: super shoppin day :musical_note:`)
    }, 8000)
  )
  .then(setTimeout(()=>{
      message.channel.send(`Addu tu cartu nao :shopping_cart:`, {files:["https://j.gifs.com/jYYL6y.gif"]})
    }, 10000)
  )
  .catch(console.error);
}