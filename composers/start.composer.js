const {Composer, Markup} = require('telegraf');
const composer = new Composer();
const text = require('../modules/const');

//start
composer.start((ctx) => {
  ctx.reply(`Привет, ${ctx.message.from.first_name ? 
    ctx.message.from.first_name : 'незнакомец'}! `)
  })

//help
composer.help((ctx) => ctx.reply(` Привет! Я - бот с обзором детских книг по возрасту и издательствам. Я могу помочь вам найти подходящую книгу для вашего ребенка. Вот несколько команд, которые вы можете использовать: ${text.commands}
Я надеюсь, что смогу помочь вам найти интересные и полезные книги!` ));


module.exports = composer 
  