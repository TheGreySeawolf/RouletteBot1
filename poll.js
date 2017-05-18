const commando = require('discord.js-commando');
var games = [];
var replyChannel;
var x = 0;


class Poll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'poll',
            group: 'random',
            memberName: 'poll',
            description: 'Runs a poll to choose anything',
            args: [{
                key: 'choice',
                prompt: 'Enter your choice',
                type: 'string'
            }]
        });
    }

    async run(message, args) {
        const { choice } = args;
        if(x != 1) {
            x = 1;
            var topic = choice;
            replyChannel = message.channel;
            replyChannel.sendMessage("The topic of the poll is " + topic);
            setTimeout(chooseGame, 15000);
        }else if(x === 1) {
            games.push(choice);
        }
    }
}

function chooseGame() {
    var num = Math.floor(Math.random() * (games.length - 1));
    console.log(num);
    replyChannel.sendMessage("The chosen is " + games[num]);
    x = 0;
    games.length = 0;
}

module.exports = Poll;