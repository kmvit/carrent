// Функция для проверки видимости элемента
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Функция для добавления класса visible к элементам в поле зрения
function handleScroll() {
    document.querySelectorAll('.animate-title, .animate-content, .car-card').forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Запускаем первую проверку видимости
    handleScroll();

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);

    // Динамическое обновление года в футере
    const yearSpan = document.querySelector('.copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Высота шапки
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Анимация для кнопок
document.querySelectorAll('button, .btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Анимация для иконок социальных сетей
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.5s ease';
    });
    
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
    });
});

// Анимация для формы
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Анимация отправки формы
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        
        // Имитация отправки формы
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
            submitButton.style.backgroundColor = '#4CAF50';
            
            // Сброс формы через 2 секунды
            setTimeout(() => {
                form.reset();
                submitButton.innerHTML = 'Отправить заявку';
                submitButton.style.backgroundColor = '#e8b98b';
            }, 2000);
        }, 1500);
    });
}

// Анимация для цен автомобилей
document.querySelectorAll('.price').forEach(price => {
    price.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    price.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Анимация для изображений автомобилей
document.querySelectorAll('.car-image').forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Мобильное меню
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    document.body.style.overflow = 'auto';
});

// Закрытие меню при клике на ссылку
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
        document.body.style.overflow = 'auto';
    });
}); 