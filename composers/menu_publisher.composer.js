const {Composer, Markup} = require('telegraf');
const composer = new Composer();

composer.action('btn_publisher', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.replyWithHTML('<b>Выберете издательство</b>', Markup.inlineKeyboard([
      [Markup.button.callback('Clever', 'btn_Clever')],
      [Markup.button.callback('АСТ', 'btn_ACT')],
      [Markup.button.callback('Лабиринт Пресс', 'btn_Labirint')],
      [Markup.button.callback('Махаон', 'btn_Mahaon')],
      [Markup.button.callback('Мелик-Пашаев', 'btn_MP')],
      [Markup.button.callback('МИФ', 'btn_Mif')],
      [Markup.button.callback('Самокат', 'btn_Samokat')],
      [Markup.button.callback('Эксмо', 'btn_Ecsmo')],
    ]) )
  } catch (e) {
    console.error(e)
  }
})

module.exports = composer