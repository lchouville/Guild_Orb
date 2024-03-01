const Discord = require('discord.js');

module.exports = async (bot, message) => {
    if (message.author.bot) return;

    // Prefix for commands
    const { prefix } = require('./config.json');
    let messContent = message.content.trim(); // Trim any leading or trailing whitespace
    let messageArray = messContent.split(" ");
    let commandName = messageArray[0].slice(prefix.length);
    let args = messageArray.slice(1);

    // If the message starts with the prefix
    if (messContent.startsWith(prefix)) {
        // If the message contains only the prefix
        if (messContent === prefix) {
            // Change the commandName to 'help' to execute the help command
            commandName = 'help';
        }

        // If the message contains a valid command
        if (bot.commands.has(commandName)) {
            let command = require(`../Commands/${commandName}`);
            command.run(bot, message, args);
            return;
        }
        
        // If the message contains an invalid command
        return message.reply(`[${commandName}] is not a valid command!`);
    }
    
    // If the message does not start with the prefix
    // Add additional logic for non-command messages if needed
};
