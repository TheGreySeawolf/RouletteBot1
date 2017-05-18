const commando = require('discord.js-commando');

class Roll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll3',
            group: 'random',
            memberName: 'roll3',
            description: 'chooses a random user',
            args: [{
                key: 'person1',
                prompt: 'Who is the first person?',
                type: 'user'
            },
            {
                key: 'person2',
                prompt: 'Who is the second person?',
                type: 'user'
            },
            {
                key: 'person3',
                prompt: 'Who is the third person?',
                type: 'user'
            }
            ]
        });
    }

    async run(message, args) {
        const { person1, person2, person3} = args;
        var number = Math.floor(Math.random() * 3) + 1;
        if(number === 1) {
            message.reply(person1);
        }else if(number === 2){
            message.reply(person2)
        }else if(number === 3){
            message.reply(person3)
        }
    }
}

module.exports = Roll;