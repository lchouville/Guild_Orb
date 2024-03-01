const Discord = require('discord.js');
const { CHANGE_NICKNAME } = require('../permission.json');

module.exports = {
    name: "nickname",
    description: "Changes the server nickname of a user",
    permission: CHANGE_NICKNAME, // Change the permission to CHANGE_NICKNAME
    dm: false,

    async run(bot, message, args) {

        // Check if the user has the required permission to use this command
        if (!message.member.permissions.has(CHANGE_NICKNAME)) { // Check for CHANGE_NICKNAME permission
            return message.reply("You don't have permission to use this command.");
        }
        
        // Get the mentioned member or use the message author as the member
        const member = message.mentions.members.first() || message.member;
        if (!member) return message.reply("Please mention a valid user.");

        // Join the arguments (excluding the mentioned member) into a single string
        const arg = args.slice(1).join(" ");

        try {
            // Check if a nickname is provided
            if (!arg) {
                // If no nickname provided, reset the nickname
                await member.setNickname(null);
                message.reply(`User's nickname has been successfully reset.`);
            } else {
                // If a nickname provided, set the nickname
                await member.setNickname(arg);
                message.reply(`User's nickname has been successfully changed to: ${arg}`);
            }
        } catch (error) {
            console.error("Error occurred while changing user's nickname:", error);
            message.reply("An error occurred while changing the nickname. Make sure you have permission to set the user's nickname!");
        }
    }
}
