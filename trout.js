const commando = require('discord.js-commando');
var x = 0;

class Slap extends commando.Command {
    //creates command trigger
    constructor(client) {
        super(client, {
            name: 'slap',
            group: 'random',
            memberName: 'slap',
            description: 'Slaps someone with a trout',
            args: [{
                key: 'victim',
                prompt: 'Who do you wish to slap?',
                type: 'user'
            }]
        });
    }

    //what runs when the command is executed
    async run(message, args) {
        const { victim } = args;
        if(x <= 10){
            message.say(message.author + " slaps " + `\u180E${victim}` + " with the holiest of mackarels");
        }
        x ++;
    }
}

module.exports = Slap;