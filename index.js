//conect library discord.js and client.
const Discord = require("discord.js");
const bot = new Discord.Client();

console.log("BotWorks");//наличие багов.

//bot register.
bot.login("NDcwMjU2MTc5NzgwNjQ4OTcx.DjYCwg.S-zss2_7QtOhxkWeXiitpnHynJc");
bot.login(process.env.BOT_KEYFORROBLOX);
