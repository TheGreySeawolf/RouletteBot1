const commando = require('discord.js-commando');

class Congratulations extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'congratulations',
            group: 'random',
            memberName: 'congratulations',
            description: 'Congratulates someone for an achievement'
        });
    }

    async run(message) {
        var replyChannel = message.channel;
        replyChannel.sendMessage('https://www.youtube.com/watch?v=Xp8H6j2vAxE');
    }
}

module.exports = Congratulations;