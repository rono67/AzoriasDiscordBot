const command = require ('./command')

module.exports = class IP extends command {

    static match(message) {
        console.log('checkin IP')
        return message.content.startsWith('.ip')
    }

    static action (message) {
        message.reply('Nous sommes désolé mais le serveur est en développement, tu n"as donc pas le droit d"avoir l"ip du serveur :c.')
    }

}