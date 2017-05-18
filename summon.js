const commando = require('discord.js-commando');
var person;
var replyChannel;
var author;

class Summon extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'summon',
            group: 'random',
            memberName: 'summon',
            description: 'Summons a person',
            args: [{
                key: 'summonee',
                prompt: 'Whom do you wish to summon?',
                type: 'user'
            }]
        });
    }

    async run(message, args) {
        const { summonee } = args;
        person = summonee;
        replyChannel = message.channel;
        author = message.author;
        if(person.presence.status != 'online') {
            replyChannel.sendMessage(message.author + " calls upon the gods and asks that they summon his friend");
            setTimeout(isOnline, 60000);
        }
    }
}

function isOnline() {
    if(person.presence.status === 'online') {
        replyChannel.sendMessage('The gods have smiled upon ' + author + " and have brought their friend safely to him");
    }else {
        replyChannel.sendMessage('The gods have not deemed ' + author + " worthy of receiving their friend back");
    }
}

module.exports = Summon;