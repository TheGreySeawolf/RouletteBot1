const commando = require('discord.js-commando');

class Source extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'source',
            group: 'random',
            memberName: 'source',
            description: 'provides the source code for the bot'
        });
    }

    async run(message) {
        message.channel.sendMessage(message.author + " The source code for this bot can be found at https://github.com/TheGreySeawolf/RouletteBot1");
    }
}

module.exports = Source;