const nodemailer = require('nodemailer');
require('dotenv').config();

// Создаем транспорт для отправки писем
const transporter = nodemailer.createTransport({
    host: 'smtp.jino.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER_FROM,
        pass: process.env.EMAIL_PASS
    }
});

// Функция для отправки письма
async function sendMail(mailOptions) {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Письмо успешно отправлено:', info.messageId);
        return true;
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        throw error;
    }
}

// Функция для отправки уведомления о новой заявке
async function sendBookingNotification(bookingData) {
    const mailOptions = {
        from: process.env.EMAIL_USER_FROM,
        to: process.env.EMAIL_USER_TO,
        subject: 'Новая заявка на бронирование',
        html: `
            <h2>Новая заявка на бронирование</h2>
            <p><strong>Имя:</strong> ${bookingData.name}</p>
            <p><strong>Телефон:</strong> ${bookingData.phone}</p>
            <p><strong>Автомобиль:</strong> ${bookingData.carId}</p>
            <p><strong>Дата заявки:</strong> ${new Date().toLocaleString('ru-RU')}</p>
        `
    };

    return sendMail(mailOptions);
}

module.exports = {
    transporter,
    sendMail,
    sendBookingNotification
}; 