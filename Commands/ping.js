const Discord = require('discord.js');

module.exports = {
    name: "ping",
    description: "Shows the bot's ping",
    permission: "none",
    dm: true,

    async run(bot,message,args) {
        await message.reply(`Pong! ${bot.ws.ping}ms`);
    }
}