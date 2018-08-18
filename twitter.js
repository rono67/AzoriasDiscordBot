const command = require ('./command')

module.exports = class Twitter extends command {

    static match(message) {
        console.log('checkin Twitter')
        return message.content.startsWith('.twitter')
    }

    static action (message) {
        message.reply('Voici le twitter du serveur : https://twitter.com/Azorias1.')
    }

}