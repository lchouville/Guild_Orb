const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
// Read the JSON file containing color codes
const { colors } = require('../color.json');

// Array of command names to exclude from slashCommands
const excludedCommands = [
    "botname",
];
// load all commands on the slashCommands option
module.exports = async bot => {
    let commands = [];
    let slashcommands = [];

    bot.commands.forEach(async command => {
        // Check if the command name is included in the excludedCommands array
        if (excludedCommands.includes(command.name)) return;

        let slashCommand = new Discord.SlashCommandBuilder()
            .setName(command.name) // name of the command
            .setDescription(command.description) // description of the command
            .setDMPermission(command.dm) // dm permission
            .setDefaultMemberPermissions(command.permission === "none" ? null : command.permission); // default member permissions

        if (command.options?.length >= 1) {
            for (let option of command.options) {
                slashCommand[`add${option.type.slice(0, 1).toUpperCase() + option.type.slice(1) + 'Option'}`](option => option.setName(option.name).setDescription(option.description).setRequired(option.required));
            }
        }
        await commands.push(slashCommand);
        await slashcommands.push("/"+slashCommand.name);
        if (slashcommands.length%4==0) {slashcommands.push("\n");}
    });

    const rest = new REST({ version: '10' }).setToken(bot.token); // create a new REST client

    await rest.put(Routes.applicationCommands(bot.user.id), { body: commands });
    console.log(`${colors.bright.green}Successfully registered${colors.reset} application commands.\n| ${slashcommands.join(' | ')} |`);
}
