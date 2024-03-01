const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const { prefix } = require('./config.json'); // command prefix stored in config.json

module.exports = {
    name: "help",
    description: "Displays information about available commands",
    permission: "none",
    dm: true,
    async run(bot, message, args) {
        const commands = fs.readdirSync(path.join(__dirname, '../Commands')).filter(file => file.endsWith('.js') && file !== 'help.js'); // Exclude the help command
        const commandList = commands.map(file => {
            const command = require(path.join(__dirname, `../Commands/${file}`));
            return `**${command.name}**: \`${command.description}\``;
        });

        const embed = {
            color: 0x0099ff,
            title: 'Available Commands',
            description: ''+commandList.join('\n'),
        };

        // Send the embed to the user
        await message.reply({ embeds: [embed] });
    }
};
