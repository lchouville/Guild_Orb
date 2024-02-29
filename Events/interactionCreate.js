const Discord = require('discord.js');

module.exports = async (bot,interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand){
        let command = require(`../Commands/${interaction.commandName}`); //get the command
        command.run(bot,interaction,interaction.options); //run the command
    }
}
