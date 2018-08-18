const command = require ('./command')

module.exports = class Google extends command {

    static match(message) {
        console.log('checkin google')
        return message.content.startsWith('.google')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }

}