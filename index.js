const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'BOOSTED');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzA2OTI5Nzc1MjI4ODc4ODUx.C-LBcA.jU6a6NWGK5Uf6KW_2ynDcqy1JgY');