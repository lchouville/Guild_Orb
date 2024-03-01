const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "botimage",
    description: "Changes the bot's profile picture",
    permission: "none", // Example permission required (can be changed as needed)
    dm: false, // Can this command be used in DMs? (false means it can only be used in guilds)

    async run(bot, message, args) {
        // Check if the user has the required permission to use this command
        // if (!message.member.hasPermission('ADMINISTRATOR')) {
        //     return message.reply("You don't have permission to use this command.");
        // }

        // Check if an image URL is provided
        if (!args[0]) {
            return message.reply("Please provide a valid image URL.");
        }

        try {
            // Read the image from the provided URL
            const imageStream = fs.createReadStream(args[0]);

            // Attempt to set the bot's profile picture
            await bot.user.setAvatar(imageStream);
            message.reply("Bot's profile picture has been successfully changed.");
        } catch (error) {
            console.error("Error occurred while changing bot's profile picture:", error);
            message.reply("An error occurred while changing the bot's profile picture.");
        }
    }
}
