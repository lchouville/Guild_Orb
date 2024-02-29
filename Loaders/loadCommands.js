const fs = require('fs');
// Read the JSON file containing color codes
const { colors } = require('../color.json');

module.exports = async bot => {
    //load all commands
    fs.readdirSync("./Commands").filter(f=>f.endsWith(".js")).forEach(async file => {
        let command = require(`../Commands/${file}`);
        //error if file has no name
        if (!command.name || typeof command.name!== "string")throw new TypeError(`the Command ${file.slice(0,file.length-3)} has no name`);
        
        bot.commands.set(command.name, command)
        console.log(`${colors.underscore.magenta}Command ${colors.dim.white}[${command.name}]${colors.bright.green} has successfully loaded${colors.reset}`);
    })
}