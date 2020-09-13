const fetch = require('node-fetch');
exports.run = (client, message, args) => {
  const api = "https://api.opendota.com/api/heroes"
  fetch(api)
  .then(response => response.json())
  .then(data=>{
    const id = Math.floor(Math.random()*data.length-1)
    const heroName = data[id]['localized_name']
    const heroNameJointMinus = heroName.replace(' ','-').toLowerCase()
    const heroNameJointPlus = heroName.replace(' ','+').toLowerCase()
    const imgurl = `https://www.dotabuff.com/assets/heroes/${heroNameJointMinus}.jpg`
    const howtoplayurl = `https://howdoiplay.com/?${heroNameJointPlus}`
    message.channel.send(`You randomed: ${heroName} :mango::herb:\n<${howtoplayurl}>`, {files:[imgurl]})
    })
  .catch(console.error)
}