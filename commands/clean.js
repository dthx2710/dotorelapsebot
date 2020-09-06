const fs = require('fs');
exports.run = (client, message, args) => {
  const lastRelapse = new Date(fs.readFileSync('lastrelapse').toString())
  const currentTime = new Date()
  var diffTime = Math.abs(currentTime - lastRelapse)
  const d = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const h = Math.floor(diffTime / (1000 * 60 * 60))%24;
  const m = Math.floor(diffTime / (1000 * 60))%60;
  const s = Math.floor(diffTime / (1000))%60;
  var clean = `${m}m ${s}s`
  if (h>0){
    clean = `${h}h ` + clean
  }
  if (d>0){
    clean = `${d}d ` + clean
  }
  message.channel.send(`Staying clean for: ${clean}`).catch(console.error);
}