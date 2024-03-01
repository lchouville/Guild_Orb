// Require the necessary discord.js classes
const Discord = require('discord.js'); // Import the discord.js module
const intents = new Discord.IntentsBitField(3276799); // 3276799 for all intent 
const bot = new Discord.Client({intents}); // Create a new client with the intents bitfield

// js Import
const config = require('./config'); // load the config file
const loadCommands = require('./Loaders/loadCommands'); // Load the commands
const loadEvents = require('./Loaders/loadEvents'); // Load the events

bot.commands = new Discord.Collection();
// When the client is ready, run this code (only once).
// console.log(`Ready! Logged in as ${readyClient.user.tag}`);
// Log in to Discord with your client's token
bot.login(config.token);
loadCommands(bot); // load the commands
loadEvents(bot); // load the events