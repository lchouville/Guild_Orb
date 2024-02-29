const Discord = require('discord.js');

module.exports = async ( bot,message) => {
    if (message.author.bot){return;}

    // Quoi!!
    messContent = message.content
    if (messContent.endsWith(" quoi")||messContent === "Quoi?"){
        return bot.commands.get("feur").run(message);
    }
    /*                      *
     *    Prefixes command  *
     *                      */

    let prefix = "?"; // Prefixes command
    let messageArray = messContent.split(" "); // Split the message into an array
    let commandName = messageArray[0].slice(prefix.length); // Get the command name
    let args = messageArray.slice(1); // Get the arguments

    if (!message.content.startsWith(prefix)) return; // If the message does not start with the prefix stop the event
    if (!bot.commands.has(commandName)) return message.reply(`[${commandName}] has not a Command!`); // If the command does not exist stop the event
    
    let command = require(`../Commands/${commandName}`); //get the command
    command.run(bot,message,args); // Run the command
}