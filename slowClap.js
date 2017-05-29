const commando = require('discord.js-commando');

class SlowClap extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'slowclap',
            group: 'random',
            memberName: 'slowclap',
            description: 'Shia LaBeouf slow clapping for your idiocracy'
        });
    }

    async run(message) {
        message.say('http://i.imgur.com/0mKXcg1.gif');
    }
}

module.exports = SlowClap;