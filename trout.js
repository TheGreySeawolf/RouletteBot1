const commando = require('discord.js-commando');

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
        message.reply("slaps " + args[0] + " with the holiest of mackarels");
        //`\u180E${victim}`     <= working slap command
    }
}

module.exports = Slap;