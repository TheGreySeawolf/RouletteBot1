const commando = require('discord.js-commando');
var x = 0;

class Ball extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'random',
            memberName: '8ball',
            description: 'ask the magic 8 ball a question'
        });
    }

    async run(message) {
        var response = " ";
        var num = Math.floor(Math.random() * 6) + 1;
        if(num == 1) {
            response = "Yes";
        }else if(num == 2) {
            response = "When Hell freezes over";
        }else if(num == 3) {
            response = "Hell no";
        }else if(num == 4) {
            response = "Maybe";
        }else if(num == 5) {
            response = "Definitely";
        }else if(num == 6) {
            response = "There's a snowball's chance in hell";
        }
        if(x <= 30) {
            message.say("The magic 8Ball says... " + response);
        }
        x ++;
    }
}

module.exports = Ball;