const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// Настроим Handlebars Middleware
app.engine('hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

// Определим маршруты для каждой страницы
app.get('/', (req, res) => {
  res.render('home', { title: 'Главная' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'О сайте' });
});

app.get('/introduction', function(req, res) {
    res.render('introduction'); // Предполагаем, что у вас есть представление с именем introduction.hbs
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});