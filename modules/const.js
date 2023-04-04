const commands = `
/start - Перезапустить бота
/help - Помощь
/menu - Поиск по параметрам
/age - получить рекомендации по книгам для определенного возраста
/publisher - получить список книг, выпущенных конкретным издательством
/random - получить случайную рекомендацию по книге
/feedback [ваше сообщение] - отправить мне ваш отзыв или предложение
/addbook - добавить свою рекомендацию книги
`
const text1= `
текст для проверки обработчика и <a href="https://youtube.com/">ссылка</a>
`
const text2= `
текст для проверки обработчика и <a href="https://youtube.com/">ссылка</a>
`
module.exports.commands = commands;
module.exports.text1 = text1;
module.exports.text2 = text2;
