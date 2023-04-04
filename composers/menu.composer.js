const {Composer, Markup} = require('telegraf');
const composer = new Composer();

composer.command('menu', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>По какому параметру предпочитаете подобрать книгу?</b>', Markup.inlineKeyboard([
      [
        Markup.button.callback('Издательство', 'btn_publisher'),
        Markup.button.callback('Возраст', 'btn_age')
      ]
    ]))
  } catch (e) {
    console.error(e)
  }
})

module.exports = composer