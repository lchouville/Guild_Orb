const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

module.exports = async bot => {
    let commands = [];

    bot.commands.forEach(async command => {
        let slashCommand = new Discord.SlashCommandBuilder()
        .setName(command.name) // name of the command
        .setDescription(command.description) // description of the command
        .setDMPermission(command.dm) // dm permission
        .setDefaultMemberPermissions(command.permission === "none" ? null : command.permission) // default member permissions

        if(command.options?.lenght >= 1) {
            for(let option of command.options) {
                slashCommand[`add${command.option[i].type.slice(0,1).toUpperCase()+command.option[i].type.slice(1,command.option[i].type.lenght)}Option`](option => option.setName(command.option[i].name).setDescription(command.option[i].description).setRequired(command.option[i].required))
            }
        }
        await commands.push(slashCommand)
    }); 

    const rest = new REST({ version: '10' }).setToken(bot.token); // create a new REST client

    await rest.put(Routes.applicationCommands(bot.user.id), { body: commands }); 
    console.log('Successfully registered application commands.');
}