const command = require ('./command')

module.exports = class Youtube extends command {

    static match(message) {
        console.log('checkin Youtube')
        return message.content.startsWith('.youtube')
    }

    static action (message) {
        message.reply('Voici la chaîne youtube du serveur : https://www.youtube.com/channel/UC7jynGmDuAEaayH1DYoB1pg.')
    }

}