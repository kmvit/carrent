const express = require('express');
const router = express.Router();
const { sendBookingNotification } = require('../config/mailer');

// Маршрут для обработки бронирования
router.post('/bookings', async (req, res) => {
    try {
        console.log('Получен запрос на бронирование:', req.body);
        const { name, phone, carId } = req.body;
        
        // Отправляем уведомление о новой заявке
        await sendBookingNotification({ 
            name, 
            phone, 
            carId
        });
        
        // Отправляем успешный ответ
        res.json({ 
            success: true, 
            message: 'Заявка успешно отправлена' 
        });
    } catch (error) {
        console.error('Ошибка при обработке заявки:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Произошла ошибка при отправке заявки' 
        });
    }
});

module.exports = router; 