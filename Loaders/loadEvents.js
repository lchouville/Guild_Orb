const fs = require('fs');
// Read the JSON file containing color codes
const { colors } = require('../color.json');

module.exports = async bot => {
    //load all commands
    fs.readdirSync("./Events").filter(f=>f.endsWith(".js")).forEach(async file => {
        let event = require(`../Events/${file}`)
        
        bot.on(file.split(".js").join(""),event.bind(null, bot))
        console.log(`${colors.underscore.yellow}Event ${colors.dim.white}[${file}]${colors.bright.green} loaded${colors.reset}`);
    })
}