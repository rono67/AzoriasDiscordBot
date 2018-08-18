const Discord = require ('discord.js')
const bot = new Discord.Client()
const Google = require ('./commands/google')
const Ip = require ('./commands/ip')
const Twitter = require ('./commands/twitter')
const Youtube = require ('./commands/youtube')
const Ytb = require ('./commands/ytb')
const Yt = require ('./commands/yt')
const Boutique = require ('./commands/boutique')
const Help = require ('commands/help')

bot.on('ready', () => {
    console.log("Bot ready !")
})

bot.on('ready', function () {
    bot.user.setGame('.help | Azorias').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
    return channel.send('Bienvenue sur Azorias ' + member.displayName)
    }).catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    
}) 

bot.on('message', function (message) {
   let commandused = Google.parse(message) || Ip.parse(message) || Twitter.parse(message) || Youtube.parse(message) || Ytb.parse(message) || Yt.parse(message) || Boutique.parse(message) || Help.parse(message)
})

bot.on('message', function (message) {
    if (message.content === '.ping') {
        message.channel.send('pong')
    }
})

bot.login('NDc0ODgzMjk1MzI3NTUxNDg5.DlRi9g.dbrNtH__CewzRTr_14Pc-wZwYfg')