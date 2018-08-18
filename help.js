const command = require ('./command')

module.exports = class Help extends command {

    static match(message) {
        console.log('checkin Help')
        return message.content.startsWith('.help')
    }

    static action (message) {
        message.reply('Tu veux connaitre toutes les commandes du bot alors les voici :\n \n**.ip** pour avoir l"ip du serveur,\n \n**.youtube/yt/ytb** pour avoir le lien de la chaîne youtube du serveur,\n \n**.twitter** pour avoir le lien de notre twitter,\n \n**.google** pour faire une recherche internet,\n \n**.boutique** pour acheter des grade pour le serveur,\n \n**.help** pour avoir toutes ces commandes')
    }

}






