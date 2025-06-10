const cars = {
    'mercedes-s-class-w223': {
        name: 'Mercedes-Benz S-Класс w223 350 d Long 4MATIC',
        description: 'Флагманский седан',
        power: 249,
        fuel: 'Дизель',
        transmission: 'АКПП 9 ступ.',
        drive: 'Полный привод',
        price: '60 000',
        weekendPrice: '70 000',
        hourlyPrice: '5 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/w223long/main.jpg',
            '/img/cars/w223long/4d432396ae03582818c04ee6468fb0f0.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Просторный салон с премиальной отделкой',
            'Передовые системы безопасности и помощи водителю',
            'Мультимедийная система MBUX с голосовым управлением',
            'Адаптивная подвеска AIRMATIC',
            'Массажный функционал сидений',
            'Система ароматизации салона'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.0 л',
                'Тип трансмиссии': 'АКПП 9 ступ.',
                'Расход топлива': '6.8 л/100км',
                'Разгон до 100 км/ч': '5.9 сек',
                'Максимальная скорость': '250 км/ч'
            },
            right: {
                'Тип привода': 'Полный привод',
                'Тип топлива': 'Дизель',
                'Мощность': '249 л.с.',
                'Крутящий момент': '600 Нм',
                'Объем багажника': '550 л'
            }
        }
    },
    'mercedes-s-class-w222': {
        name: 'Mercedes-Benz S-Класс 350 CDI BlueTEC W222',
        description: 'Премиальный седан',
        power: 249,
        fuel: 'Дизель',
        transmission: 'АКПП 7 ступ.',
        drive: 'Задний привод',
        price: '25 000',
        weekendPrice: '35 000',
        hourlyPrice: '5 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/s222350cdi/main.jpg',
            '/img/cars/s222350cdi/IMG_20250606_142233_276.jpg',
            '/img/cars/s222350cdi/IMG_20250606_142240_017.jpg',
            '/img/cars/s222350cdi/IMG_20250606_142244_789.jpg',
            '/img/cars/s222350cdi/IMG_20250606_142255_452.jpg',
            '/img/cars/s222350cdi/IMG_20250606_142306_556.jpg',
            '/img/cars/s222350cdi/IMG_20250606_142312_084.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Просторный салон с премиальной отделкой',
            'Передовые системы безопасности и помощи водителю',
            'Мультимедийная система COMAND Online',
            'Адаптивная подвеска AIRMATIC',
            'Массажный функционал сидений',
            'Система ароматизации салона'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.0 л',
                'Тип трансмиссии': 'АКПП 7 ступ.',
                'Расход топлива': '6.8 л/100км',
                'Разгон до 100 км/ч': '6.8 сек',
                'Максимальная скорость': '250 км/ч'
            },
            right: {
                'Тип привода': 'Задний привод',
                'Тип топлива': 'Дизель',
                'Мощность': '249 л.с.',
                'Крутящий момент': '620 Нм',
                'Объем багажника': '530 л'
            }
        }
    },
    'mercedes-s-class-w222-new': {
        name: 'Mercedes-Benz S-Класс W222',
        description: 'Премиальный седан',
        power: 249,
        fuel: 'Дизель',
        transmission: 'АКПП 9 ступ.',
        drive: 'Полный привод',
        price: '30 000',
        weekendPrice: '40 000',
        hourlyPrice: '7 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/s-222/main.jpg',
            '/img/cars/s-222/1200x900.webp',
            '/img/cars/s-222/img_20190503_wa0005.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Премиальный комфорт',
            'Передовые системы безопасности',
            'Мультимедийная система COMAND Online',
            'Адаптивная подвеска',
            'Электрорегулировка сидений с памятью',
            'Трехзонный климат-контроль'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.0 л',
                'Тип трансмиссии': 'АКПП 9 ступ.',
                'Расход топлива': '6.8 л/100км',
                'Разгон до 100 км/ч': '6.8 сек',
                'Максимальная скорость': '250 км/ч'
            },
            right: {
                'Тип привода': 'Полный привод',
                'Тип топлива': 'Дизель',
                'Мощность': '249 л.с.',
                'Крутящий момент': '600 Нм',
                'Объем багажника': '530 л'
            }
        }
    },
    'bmw-7-series': {
        name: 'BMW 7 Series 740d xDrive',
        description: 'Флагманский седан',
        power: 286,
        fuel: 'Дизель',
        transmission: 'АКПП 8 ступ.',
        drive: 'Полный привод',
        price: '30 000',
        weekendPrice: '40 000',
        hourlyPrice: '5 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/bmw7series/main.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Просторный салон с премиальной отделкой',
            'Передовые системы безопасности и помощи водителю',
            'Мультимедийная система iDrive 7.0',
            'Адаптивная подвеска с пневмоэлементами',
            'Массажный функционал сидений',
            'Система климат-контроля с 4 зонами'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.0 л',
                'Тип трансмиссии': 'АКПП 8 ступ.',
                'Расход топлива': '6.8 л/100км',
                'Разгон до 100 км/ч': '5.7 сек',
                'Максимальная скорость': '250 км/ч'
            },
            right: {
                'Тип привода': 'Полный привод',
                'Тип топлива': 'Дизель',
                'Мощность': '286 л.с.',
                'Крутящий момент': '650 Нм',
                'Объем багажника': '515 л'
            }
        }
    },
    'bmw-7-g12': {
        name: 'BMW 7 G12',
        description: 'Премиальный седан',
        power: 249,
        fuel: 'Дизель',
        transmission: 'АКПП 9 ступ.',
        drive: 'Полный привод',
        price: '30 000',
        weekendPrice: '40 000',
        hourlyPrice: '3 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/bmw-g12/main.webp',
            '/img/cars/bmw-g12/1200x900n.webp',
            '/img/cars/bmw-g12/06b2f49d-bcbb-42ca-991f-94bf06026e2f.jpeg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Премиальный комфорт',
            'Передовые системы безопасности',
            'Мультимедийная система iDrive',
            'Адаптивная подвеска',
            'Электрорегулировка сидений с памятью',
            'Четырехзонный климат-контроль'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.0 л',
                'Тип трансмиссии': 'АКПП 9 ступ.',
                'Расход топлива': '6.8 л/100км',
                'Разгон до 100 км/ч': '6.8 сек',
                'Максимальная скорость': '250 км/ч'
            },
            right: {
                'Тип привода': 'Полный привод',
                'Тип топлива': 'Дизель',
                'Мощность': '249 л.с.',
                'Крутящий момент': '600 Нм',
                'Объем багажника': '515 л'
            }
        }
    },
    'volkswagen-polo-auto': {
        name: 'Volkswagen Polo',
        description: 'Городской автомобиль',
        power: 110,
        fuel: 'Бензин',
        transmission: 'АКПП 6 ступ.',
        drive: 'Передний привод',
        price: '4 000',
        weekendPrice: '5 000',
        hourlyPrice: '1 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/polo/main.jpg',
            '/img/cars/polo/2.jpg',
            '/img/cars/polo/i.webp',
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+300 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Компактный и экономичный',
            'Системы безопасности и помощи водителю',
            'Мультимедийная система с Apple CarPlay и Android Auto',
            'Кондиционер',
            'Электрорегулировка зеркал',
            'Передние электростеклоподъемники'
        ],
        specs: {
            left: {
                'Объем двигателя': '1.6 л',
                'Тип трансмиссии': 'АКПП 6 ступ.',
                'Расход топлива': '6.0 л/100км',
                'Разгон до 100 км/ч': '11.9 сек',
                'Максимальная скорость': '183 км/ч'
            },
            right: {
                'Тип привода': 'Передний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '110 л.с.',
                'Крутящий момент': '155 Нм',
                'Объем багажника': '351 л'
            }
        }
    },
    'volkswagen-polo-manual': {
        name: 'Volkswagen Polo',
        description: 'Городской автомобиль',
        power: 110,
        fuel: 'Бензин',
        transmission: 'МКПП 6 ступ.',
        drive: 'Передний привод',
        price: '3 000',
        weekendPrice: '4 000',
        hourlyPrice: '1 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/polo-2/main.jpg',
            '/img/cars/polo-2/4.webp',
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+300 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Компактный и экономичный',
            'Системы безопасности и помощи водителю',
            'Мультимедийная система с Apple CarPlay и Android Auto',
            'Кондиционер',
            'Электрорегулировка зеркал',
            'Передние электростеклоподъемники'
        ],
        specs: {
            left: {
                'Объем двигателя': '1.6 л',
                'Тип трансмиссии': 'МКПП 6 ступ.',
                'Расход топлива': '6.0 л/100км',
                'Разгон до 100 км/ч': '11.9 сек',
                'Максимальная скорость': '183 км/ч'
            },
            right: {
                'Тип привода': 'Передний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '110 л.с.',
                'Крутящий момент': '155 Нм',
                'Объем багажника': '351 л'
            }
        }
    },
    'ford-focus': {
        name: 'Ford Focus',
        description: 'Городской хетчбек',
        power: 105,
        fuel: 'Бензин',
        transmission: 'МКПП',
        drive: 'Передний привод',
        price: '4 500',
        weekendPrice: '5 500',
        hourlyPrice: '1 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/focus/main.webp',
            '/img/cars/focus/gen448x2_93271_2.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+300 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Компактный и экономичный',
            'Системы безопасности и помощи водителю',
            'Мультимедийная система с Apple CarPlay и Android Auto',
            'Кондиционер',
            'Электрорегулировка зеркал',
            'Передние электростеклоподъемники'
        ],
        specs: {
            left: {
                'Объем двигателя': '1.6 л',
                'Тип трансмиссии': 'МКПП',
                'Расход топлива': '6.0 л/100км',
                'Разгон до 100 км/ч': '11.9 сек',
                'Максимальная скорость': '183 км/ч'
            },
            right: {
                'Тип привода': 'Передний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '105 л.с.',
                'Крутящий момент': '140 Нм',
                'Объем багажника': '351 л'
            }
        }
    },
    'mercedes-v-class': {
        name: 'Mercedes-Benz V-Класс',
        description: 'Премиальный минивэн',
        power: 239,
        fuel: 'Дизель',
        transmission: 'АКПП 9 ступ.',
        drive: 'Полный привод',
        price: '15 000',
        weekendPrice: '17 000',
        hourlyPrice: '5 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/v-class/main.jpg',
            '/img/cars/v-class/IMG_20250606_142328_406.jpg',
            '/img/cars/v-class/IMG_20250606_142332_552.jpg',
            '/img/cars/v-class/IMG_20250606_142340_383.jpg',
            '/img/cars/v-class/IMG_20250606_142344_342.jpg',
            '/img/cars/v-class/IMG_20250606_142355_651.jpg',
            '/img/cars/v-class/IMG_20250606_142412_379.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Просторный салон с премиальной отделкой',
            'Системы безопасности и помощи водителю',
            'Мультимедийная система COMAND Online',
            'Адаптивная подвеска',
            'Электрорегулировка сидений с памятью',
            'Трехзонный климат-контроль'
        ],
        specs: {
            left: {
                'Объем двигателя': '2.2 л',
                'Тип трансмиссии': 'АКПП 9 ступ.',
                'Расход топлива': '7.6 л/100км',
                'Разгон до 100 км/ч': '12.8 сек',
                'Максимальная скорость': '190 км/ч'
            },
            right: {
                'Тип привода': 'Полный привод',
                'Тип топлива': 'Дизель',
                'Мощность': '239 л.с.',
                'Крутящий момент': '500 Нм',
                'Объем багажника': '1030 л'
            }
        }
    },
    'nissan-quest': {
        name: 'Nissan Quest',
        description: 'Комфортабельный минивэн',
        power: 272,
        fuel: 'Бензин',
        transmission: 'АКПП 6 ступ.',
        drive: 'Передний привод',
        price: '10 000',
        weekendPrice: '12 000',
        hourlyPrice: '2 500',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/nissan/main.jpg',
            '/img/cars/nissan/1.jpg',
            '/img/cars/nissan/2.jpg',
            '/img/cars/nissan/3.jpg',
            '/img/cars/nissan/4.jpg',
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Комфортный салон с премиальной отделкой',
            'Передовые системы безопасности и помощи водителю',
            'Мультимедийная система COMAND Online',
            'Адаптивная подвеска',
            'Электрорегулировка сидений с памятью',
            'Трехзонный климат-контроль'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.5 л',
                'Тип трансмиссии': 'АКПП 6 ступ.',
                'Расход топлива': '8.5 л/100км',
                'Разгон до 100 км/ч': '11.2 сек',
                'Максимальная скорость': '185 км/ч'
            },
            right: {
                'Тип привода': 'Передний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '272 л.с.',
                'Крутящий момент': '350 Нм',
                'Объем багажника': '1030 л'
            }
        }
    },
    'mercedes-viano': {
        name: 'Mercedes-Benz Viano 3.5',
        description: 'Комфортный минивэн',
        power: 258,
        fuel: 'Бензин 3.5',
        transmission: 'АКПП',
        drive: 'Задний привод',
        price: '80',
        weekendPrice: '100',
        hourlyPrice: '20',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/v-class-old/main.jpg',
            '/img/cars/v-class-old/IMG_20250606_142438_748.jpg',
            '/img/cars/v-class-old/IMG_20250606_142441_783.jpg',
            '/img/cars/v-class-old/IMG_20250606_142444_210.jpg',
            '/img/cars/v-class-old/IMG_20250606_142448_622.jpg',
            '/img/cars/v-class-old/IMG_20250606_142451_314.jpg',
            '/img/cars/v-class-old/IMG_20250606_142500_190.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+300 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Комфортный салон с премиальной отделкой',
            'Передовые системы безопасности и помощи водителю',
            'Мультимедийная система COMAND Online',
            'Адаптивная подвеска',
            'Электрорегулировка сидений с памятью',
            'Трехзонный климат-контроль'
        ],
        specs: {
            left: {
                'Объем двигателя': '3.5 л',
                'Тип трансмиссии': 'АКПП',
                'Расход топлива': '8.5 л/100км',
                'Разгон до 100 км/ч': '11.2 сек',
                'Максимальная скорость': '185 км/ч'
            },
            right: {
                'Тип привода': 'Задний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '258 л.с.',
                'Крутящий момент': '350 Нм',
                'Объем багажника': '1030 л'
            }
        }
    },
    'mercedes-c-class': {
        name: 'Mercedes-Benz C-Класс W205',
        description: 'Бизнес-седан',
        power: 156,
        fuel: 'Бензин',
        transmission: 'АКПП 7 ступ.',
        drive: 'Задний привод',
        price: '11 000',
        weekendPrice: '13 000',
        hourlyPrice: '2 500',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/mersedes-c-class/main.jpg',
            '/img/cars/mersedes-c-class/IMG_20250606_142606_590.jpg',
            '/img/cars/mersedes-c-class/IMG_20250606_142609_918.jpg',
            '/img/cars/mersedes-c-class/IMG_20250606_142613_620.jpg',
            '/img/cars/mersedes-c-class/IMG_20250606_142616_922.jpg',
            '/img/cars/mersedes-c-class/IMG_20250606_142645_899.jpg',
            '/img/cars/mersedes-c-class/IMG_20250606_142750_088.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+300 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Комфортный салон',
            'Системы безопасности и помощи водителю',
            'Мультимедийная система COMAND Online',
            'Электрорегулировка сидений',
            'Двухзонный климат-контроль',
            'Передние и задние парктроники'
        ],
        specs: {
            left: {
                'Объем двигателя': '1.6 л',
                'Тип трансмиссии': 'АКПП 7 ступ.',
                'Расход топлива': '6.3 л/100км',
                'Разгон до 100 км/ч': '8.9 сек',
                'Максимальная скорость': '225 км/ч'
            },
            right: {
                'Тип привода': 'Задний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '156 л.с.',
                'Крутящий момент': '250 Нм',
                'Объем багажника': '480 л'
            }
        }
    },
    'hyundai-elantra': {
        name: 'Hyundai Elantra',
        description: 'Экономичный седан',
        power: 150,
        fuel: 'Бензин',
        transmission: 'АКПП 6 ступ.',
        drive: 'Передний привод',
        price: '5 000',
        weekendPrice: '6 000',
        hourlyPrice: '2 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/elantra/main.jpg',
            '/img/cars/elantra/IMG_20250606_142514_497.jpg',
            '/img/cars/elantra/IMG_20250606_142518_509.jpg',
            '/img/cars/elantra/IMG_20250606_142521_599.jpg',
            '/img/cars/elantra/IMG_20250606_142530_563.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+300 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ],
        features: [
            'Компактный и экономичный',
            'Системы безопасности и помощи водителю',
            'Мультимедийная система с Apple CarPlay и Android Auto',
            'Кондиционер',
            'Электрорегулировка зеркал',
            'Передние электростеклоподъемники'
        ],
        specs: {
            left: {
                'Объем двигателя': '1.6 л',
                'Тип трансмиссии': 'АКПП 6 ступ.',
                'Расход топлива': '6.0 л/100км',
                'Разгон до 100 км/ч': '11.9 сек',
                'Максимальная скорость': '183 км/ч'
            },
            right: {
                'Тип привода': 'Передний привод',
                'Тип топлива': 'Бензин',
                'Мощность': '150 л.с.',
                'Крутящий момент': '155 Нм',
                'Объем багажника': '351 л'
            }
        }
    },
    'mercedes-c-class-w205': {
        name: 'Mercedes-Benz C-Класс W205',
        description: 'Бизнес-седан',
        power: 156,
        fuel: 'Бензин',
        transmission: 'АКПП 7 ступ.',
        drive: 'Задний привод',
        price: '11 000',
        weekendPrice: '13 000',
        hourlyPrice: '2 500',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/c205/main.jpg'
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ]
    },
    'mercedes-e-class': {
        name: 'Mercedes-Benz E-Класс E300 AMG W213',
        description: 'Бизнес-седан',
        power: 245,
        fuel: 'Бензин',
        transmission: 'АКПП 9 ступ.',
        drive: 'Задний привод',
        price: '13 000',
        weekendPrice: '15 000',
        hourlyPrice: '3 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/mersedes-e300/main.jpeg',
            '/img/cars/mersedes-e300/IMG_20250606_142859_276.jpg',
            '/img/cars/mersedes-e300/IMG_20250606_142902_613.jpg',
            '/img/cars/mersedes-e300/IMG_20250606_142907_120.jpg',
            '/img/cars/mersedes-e300/IMG_20250606_142911_182.jpg',
            '/img/cars/mersedes-e300/IMG_20250606_142918_710.jpg',
            '/img/cars/mersedes-e300/IMG_20250606_142934_446.jpg',
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ]
    },
    'bmw-5-series': {
        name: 'BMW 5 G30',
        description: 'Бизнес-седан',
        power: 190,
        fuel: 'Дизель',
        transmission: 'АКПП 9 ступ.',
        drive: 'Задний привод',
        price: '13 000',
        weekendPrice: '15 000',
        hourlyPrice: '3 000',
        minRentDays: 1,
        minRentHours: 3,
        images: [
            '/img/cars/bmvg30d/main.jpg',
            '/img/cars/bmvg30d/IMG_20250606_142542_838.jpg',
            '/img/cars/bmvg30d/IMG_20250606_142546_980.jpg',
            '/img/cars/bmvg30d/IMG_20250606_142549_681.jpg',
            '/img/cars/bmvg30d/IMG_20250606_142556_212.jpg',
            '/img/cars/bmvg30d/IMG_20250606_142600_005.jpg',
        ],
        options: [
            {
                icon: 'fas fa-child',
                name: 'Детское кресло',
                price: '+500 ₽/сутки'
            },
            {
                icon: 'fas fa-car',
                name: 'Водитель',
                price: '+3000 ₽/сутки'
            }
        ]
    }
};

module.exports = cars; 