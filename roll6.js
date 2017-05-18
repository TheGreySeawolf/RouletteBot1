const commando = require('discord.js-commando');

class Roll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll6',
            group: 'random',
            memberName: 'roll6',
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
            },
            {
                key: 'person6',
                prompt: 'Who is the sixth person?',
                type: 'user'
            }
            ]
        });
    }

    async run(message, args) {
        const { person1, person2, person3, person4, person5, person6} = args;
        var number = Math.floor(Math.random() * 6) + 1;
        if(number === 1) {
            message.reply(person1);
        }else if(number === 2){
            message.reply(person2)
        }else if(number === 3){
            message.reply(person3)
        }else if(number === 4){
            message.reply(person4)
        }else if(number === 5){
            message.reply(person5)
        }else if(number === 6){
            message.reply(person6)
        }
    }
}

module.exports = Roll;