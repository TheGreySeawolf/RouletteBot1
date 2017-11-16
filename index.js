const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'BOOSTED');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('REDACTED');
