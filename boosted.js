const commando = require('discord.js-commando');
var x = 0;

class Boosted extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'monkey',
            group: 'random',
            memberName: 'monkey',
            description: 'calls out boosted monkeys',
            args: [{
                key: 'boosted',
                prompt: 'Who is the boosted monkey?',
                type: 'user'
            }]
        });
    }

    async run(message, args) {
        const { boosted } = args;
        if(x <= 10) {
            message.say(`\u180E${boosted}` + " IS A BOOSTED MONKEY");
            x ++;
        }
    }
}

module.exports = Boosted;