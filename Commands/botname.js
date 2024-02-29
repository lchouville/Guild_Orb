const Discord = require('discord.js');

module.exports = {
    name: "botname",
    description: "Changes the server name of the bot",
    permission: "none", // Example permission required (can be changed as needed)
    dm: false, // Can this command be used in DMs? (false means it can only be used in guilds)

    async run(bot, message, args) {
        // Check if the user has the required permission to use this command
        // if (!message.member.hasPermission('ADMINISTRATOR')) {
        //     return message.reply("You don't have permission to use this command.");
        // }

        // Check if arguments are provided
        if (!args[0]) {
            return message.reply("Please provide a new server name.");
        }

        try {
            // Attempt to change the server name
            await message.guild.setName(args.join(" "));
            message.reply(`Server name has been successfully changed to: ${args.join(" ")}`);
        } catch (error) {
            console.error("Error occurred while changing server name:", error);
            message.reply("An error occurred while changing the server name.");
        }
    }
}