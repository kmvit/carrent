const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cars = require('./data/cars');
const { sendBookingNotification } = require('./config/mailer');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const app = express();

// Настройка EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// Middleware для обработки JSON
app.use(express.json());

// Middleware для логирования запросов
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Редирект с /index.html на /
app.get('/index.html', (req, res) => {
    res.redirect('/');
});

// Настройка статических файлов
app.use(express.static(path.join(__dirname, 'public')));
app.use('/video', express.static(path.join(__dirname, 'video')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Обработка ошибок 404 для статических файлов
app.use((req, res, next) => {
    if (req.path.startsWith('/video/') || req.path.startsWith('/img/')) {
        console.error(`Файл не найден: ${req.path}`);
        res.status(404).send('Файл не найден');
    } else {
        next();
    }
});

// Настройка транспорта для отправки email
const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true для порта 465, false для других портов
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Проверка подключения к почтовому серверу
transporter.verify(function(error, success) {
    if (error) {
        console.log('Ошибка подключения к почтовому серверу:', error);
    } else {
        console.log('Сервер готов к отправке писем');
    }
});

// Обработка формы обратной связи
app.post('/api/feedback', async (req, res) => {
    try {
        const { name, phone, message } = req.body;

        // Настройка письма
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Новая заявка с сайта Premium Car Rental',
            html: `
                <h2>Новая заявка</h2>
                <p><strong>Имя:</strong> ${name}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>Сообщение:</strong> ${message}</p>
            `
        };

        // Отправка письма
        await transporter.sendMail(mailOptions);
        
        res.json({ success: true, message: 'Заявка успешно отправлена' });
    } catch (error) {
        console.error('Ошибка при отправке заявки:', error);
        res.status(500).json({ success: false, message: 'Ошибка при отправке заявки' });
    }
});

// Подключаем API-маршруты
app.use('/api', apiRoutes);

// Маршруты
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная',
        description: 'Премиум автомобили в аренду в Пятигорске',
        keywords: 'аренда автомобилей, премиум автомобили, Пятигорск'
    });
});

app.get('/contacts', (req, res) => {
    res.render('contacts', {
        title: 'Контакты',
        description: 'Контактная информация Premium Car Rental',
        keywords: 'контакты, адрес, телефон, аренда автомобилей'
    });
});

app.get('/conditions', (req, res) => {
    res.render('conditions', {
        title: 'Условия аренды',
        description: 'Условия аренды автомобилей Premium Car Rental',
        keywords: 'условия аренды, требования, документы'
    });
});

// Маршрут для страницы детального просмотра автомобиля
app.get('/car-details', (req, res) => {
    const carId = req.query.id;
    const car = cars[carId];

    if (!car) {
        console.error(`Автомобиль не найден: ${carId}`);
        return res.status(404).render('404', {
            title: 'Автомобиль не найден',
            description: 'Запрашиваемый автомобиль не существует',
            keywords: '404, автомобиль не найден'
        });
    }

    res.render('car-details', {
        title: car.name,
        description: car.description,
        keywords: `${car.name}, аренда, премиум автомобили`,
        car: car
    });
});

// Обработка 404
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Страница не найдена',
        description: 'Запрашиваемая страница не существует',
        keywords: '404, страница не найдена'
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
}); 