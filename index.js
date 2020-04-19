const discord = require ("discord.js");
const config = require ("./config.json");


const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)


bot.on("message", async message =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice[0];

if(cmd === `${prefix}hello)}`
return
message.channel.send("Hi how is your day going!")
}

if(cmd === `${prefix}ping)}`
let sEmbed = new 
Discord.MessageEmbed()
.setColor(#0002)
.addField("Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms
 message.channel.send({embed: sEmbed});
    }

if(cmd === `${prefix}test)}`
return
message.channel.send("Checks have been preformed and this bot is online and is working perfectly fine!")
}

    if(cmd === `${prefix}purge`){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Error 105: **This command requores administrator');
        message.channel.bulkDelete(args[2]).then(() => {
            message.channel.send("Deleted 20 messages.")
            .then (message => {
                message.delete(5000);
            })

        }

        )
        
        
        
        }
    
 
    

})
    
bot.login(botconfig.token);
