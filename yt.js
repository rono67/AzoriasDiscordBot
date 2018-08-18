const command = require ('./command')

module.exports = class Yt extends command {

    static match(message) {
        console.log('checkin Yt')
        return message.content.startsWith('.yt')
    }

    static action (message) {
        message.reply('Voici la chaîne youtube du serveur : https://www.youtube.com/channel/UC7jynGmDuAEaayH1DYoB1pg.')
    }

}