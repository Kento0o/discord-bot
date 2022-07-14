const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs");

client.on("ready", () => {
console.log(`${client.user.tag} Bot Online!`)
setInterval(function() {
    client.user.setActivity("+help", {
        type: "STREAMING",
        url: "https://www.twitch.tv/rebeudeter"
    });

}, 5000)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Total Command!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} Named Command Online!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
