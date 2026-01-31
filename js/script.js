// Когда страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    // 1. Обработчик кнопки
    const button = document.getElementById('cta-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Спасибо! Сайт работает через GitHub Pages!');
        });
    }
    
    // 2. Обновляем год в футере
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // 3. Плавное появление блоков
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'all 0.6s ease';
    });
    
    // Через небольшую задержку делаем видимыми
    setTimeout(() => {
        features.forEach(feature => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        });
    }, 300);
});