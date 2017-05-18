const commando = require('discord.js-commando');

class Fight extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'fightme',
            group: 'random',
            memberName: 'fightme',
            description: 'Challenge someone to a 1v1',
            args: [{
                key: 'opponent',
                prompt: 'Who do you want to smack down?',
                type: 'user'
            }]
        });
    }

    async run(message, args) {

        var game = " ";
        var num =  Math.floor(Math.random() * 5) + 1;
        if(num == 1) {
            game = "Counter Strike";
        }else if(num == 2) {
            game = "Overwatch";
        }else if(num == 3) {
            game = "League";
        }else if(num == 4) {
            game = "Civilization 5; marathon length; only complete kills";
        }else if(num == 5) {
            game = "Hearthstone";
        }
        
        const { opponent } = args;
        message.reply("challenges " + `\u180E${opponent}` + " to a 1 v 1. The game of choice is: " + game);
    }
} 

module.exports = Fight;