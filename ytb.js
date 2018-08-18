const command = require ('./command')

module.exports = class Ytb extends command {

    static match(message) {
        console.log('checkin Ytb')
        return message.content.startsWith('.ytb')
    }

    static action (message) {
        message.reply('Voici la chaîne youtube du serveur : https://www.youtube.com/channel/UC7jynGmDuAEaayH1DYoB1pg.')
    }

}