module.exports = async client => {
    // Online
    console.log(`${client.user.tag} is ready!`);
  
    // dotobot is playing !help
    // client.user.setActivity(`${client.config.prefix}help`, {type: "PLAYING"});
  client.user.setActivity(`${client.config.prefix}dotobo`, {type: "PLAYING"});
  
  };