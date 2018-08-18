const command = require ('./command')

module.exports = class Boutique extends command {

    static match(message) {
        console.log('checkin Boutique')
        return message.content.startsWith('.boutique')
    }

    static action (message) {
        message.reply('Voici la boutique du serveur : http://azoriasboutique.buycraft.net/category/1212936 et merci pour ton argent :)')
    }

}