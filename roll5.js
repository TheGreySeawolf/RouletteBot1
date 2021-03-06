const commando = require('discord.js-commando');

class Roll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll5',
            group: 'random',
            memberName: 'roll5',
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
            },
            {
                key: 'person4',
                prompt: 'Who is the fourth person?',
                type: 'user'
            },
            {
                key: 'person5',
                prompt: 'Who is the fifth person?',
                type: 'user'
            }
            ]
        });
    }

    async run(message, args) {
        const { person1, person2, person3, person4, person5} = args;
        var number = Math.floor(Math.random() * 5) + 1;
        if(number === 1) {
            message.say(person1);
        }else if(number === 2){
            message.say(person2)
        }else if(number === 3){
            message.say(person3)
        }else if(number === 4){
            message.say(person4)
        }else if(number === 5){
            message.say(person5)
        }
    }
}

module.exports = Roll;