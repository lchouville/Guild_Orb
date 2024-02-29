const Discord = require('discord.js');
const loadSlashCommands = require('../Loaders/loadSlashCommands');

// Read the JSON file containing color codes
const { colors } = require('../color.json');

module.exports = async (bot) => {
    await loadSlashCommands(bot);
    console.log(`${colors.dim.cyan}${bot.user.tag}${colors.bright.green} as Logged!${colors.reset}`);
}