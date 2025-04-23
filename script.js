document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Переключение темы
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Установка начальной темы
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Светлая тема';
    }
    
    // Обработчик переключения темы
    themeToggle.addEventListener('click', function() {
        let theme = 'light';
        if (document.body.getAttribute('data-theme') !== 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Светлая тема';
            theme = 'dark';
        } else {
            document.body.removeAttribute('data-theme');
            themeToggle.textContent = 'Тёмная тема';
        }
        localStorage.setItem('theme', theme);
    });
    
    // Обработка формы обратной связи
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Здесь можно добавить отправку данных на сервер
            console.log('Форма отправлена:', formData);
            
            // Очистка формы и показ сообщения об успехе
            contactForm.reset();
            alert('Спасибо! Ваше сообщение отправлено.');
        });
    }
});