const Discord = require('discord.js');

module.exports = {
    name: "feur",
    description: "Say Feur",
    permission: "none",
    dm: false,

    async run(bot,message,args) {
        await message.reply("Feur")
    }
}