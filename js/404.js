// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    init404Page();
});

function init404Page() {
    // Получаем кнопку
    const homeBtn = document.getElementById('homeBtn');
    
    // Добавляем обработчик события для кнопки
    homeBtn.addEventListener('click', goHome);
    
    // Запускаем анимации
    startAnimations();
}

// Функция для возврата на главную страницу
function goHome() {
    // Эффект нажатия кнопки
    this.style.transform = 'scale(0.95)';
    
    // Здесь должна быть логика перехода на главную страницу
    // window.location.href = '/';
    
    // Временно показываем сообщение
    showMessage('Возвращаемся на главную страницу...');
    
    // Возвращаем кнопку в исходное состояние
    setTimeout(() => {
        this.style.transform = '';
    }, 200);
}

// Запуск анимаций
function startAnimations() {
    // Анимация для кокосов на острове
    const coconuts = document.querySelectorAll('.coconut');
    coconuts.forEach((coconut, index) => {
        // Случайная задержка для анимации
        const delay = index * 1000;
        setInterval(() => {
            coconut.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                coconut.style.transform = 'translateY(0)';
            }, 500);
        }, 3000 + delay);
    });
    
    // Легкая анимация для солнца при движении мыши
    document.addEventListener('mousemove', (e) => {
        const sun = document.querySelector('.sun');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        sun.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px) scale(1.05)`;
    });
}

// Вспомогательная функция для показа сообщений
function showMessage(text) {
    // Создаем элемент сообщения
    const message = document.createElement('div');
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(30, 144, 255, 0.9);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        font-weight: 500;
    `;
    
    document.body.appendChild(message);
    
    // Удаляем сообщение через 3 секунды
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(message)) {
                document.body.removeChild(message);
            }
        }, 300);
    }, 3000);
}