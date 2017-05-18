const commando = require('discord.js-commando');

class PullTrigger extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'shoot',
            group: 'random',
            memberName: 'shoot',
            description: 'pulls the trigger'
        });
    }

    async run(message, args) {
        var death1 = Math.floor(Math.random() * 5) + 1;
        //var death2 = Math.floor(Math.random() * 5) + 1;
        //var death3 = Math.floor(Math.random() * 5) + 1;
        var cylinder = Math.floor(Math.random() * 5) + 1;

        /*while(death1 == death2) {
            death2 = Math.floor(Math.random() * 5) + 1;
        };
        while(death3 == death1 || death3 == death2) {
            death3 = Math.floor(Math.random() * 5) + 1;
        };*/

        if(cylinder == death1) {
            message.reply('picks up the gun and puts it to his head, closes his eyes and pulls the trigger. His brains splatter across the wall. :frowning: :gun:');
        }else {
            message.reply('lives and puts the gun down. :smile:');
        }
        
    }
}

module.exports = PullTrigger;