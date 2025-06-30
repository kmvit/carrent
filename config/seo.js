const seoConfig = {
    // Главная страница
    index: {
        title: 'Аренда автомобилей в Пятигорске | Carskfo',
        description: 'Аренда автомобилей в Пятигорске. Большой выбор автомобилей разных классов: премиум, бизнес, комфорт и эконом. Индивидуальные туры и трансферы.',
        keywords: 'аренда автомобилей, прокат авто, Пятигорск, Кавказ, трансфер, туры, Mercedes, BMW, премиум автомобили',
        url: 'https://carrentkfo.ru'
    },
    
    // Страница деталей автомобиля
    carDetails: (car) => ({
        title: `Аренда ${car.name} в Пятигорске | Carskfo`,
        description: `Аренда ${car.name} в Пятигорске. ${car.description}. ${car.power} л.с., ${car.transmission}, ${car.drive}. ${car.price} ₽/сутки.`,
        keywords: `аренда ${car.name}, прокат ${car.name.split(' ')[0]}, ${car.description}, Пятигорск, ${car.power} л.с., ${car.transmission}, ${car.drive}`,
        url: `https://carrentkfo.ru/car-details?id=${car.id}`
    }),

    // Страница контактов
    contacts: {
        title: 'Контакты | Аренда автомобилей в Пятигорске',
        description: 'Свяжитесь с нами для аренды автомобиля в Пятигорске. Телефоны, адрес, режим работы.',
        keywords: 'контакты, аренда автомобилей, Пятигорск, адрес, телефон',
        url: 'https://carrentkfo.ru/contacts'
    }
};

module.exports = seoConfig; 