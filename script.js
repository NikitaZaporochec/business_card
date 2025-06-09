document.addEventListener('DOMContentLoaded', () => {
    // Вращение карточки при наведении работает благодаря CSS
    
    // Дополнительная анимация при загрузке страницы
    const card = document.querySelector('.card');
    
    // Переключение языка
    const langButtons = document.querySelectorAll('.lang-btn');
    const cardRu = document.querySelector('.card-ru');
    const cardEn = document.querySelector('.card-en');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Активируем кнопку
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Переключаем карточку с эффектом swoosh
            if (lang === 'ru') {
                cardEn.classList.add('swoosh-out');
                setTimeout(() => {
                    cardEn.classList.remove('active');
                    cardEn.classList.remove('swoosh-out');
                    
                    cardRu.classList.add('active');
                    cardRu.classList.add('swoosh-in');
                    
                    setTimeout(() => {
                        cardRu.classList.remove('swoosh-in');
                    }, 800);
                }, 400);
            } else {
                cardRu.classList.add('swoosh-out');
                setTimeout(() => {
                    cardRu.classList.remove('active');
                    cardRu.classList.remove('swoosh-out');
                    
                    cardEn.classList.add('active');
                    cardEn.classList.add('swoosh-in');
                    
                    setTimeout(() => {
                        cardEn.classList.remove('swoosh-in');
                    }, 800);
                }, 400);
            }
        });
    });
    
    // Добавляем анимацию "печати" для списка услуг
    const serviceItems = document.querySelectorAll('.services li');
    serviceItems.forEach((item, index) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease';
            item.style.opacity = '1';
        }, 1500 + (index * 200));
    });
    
    // Интро-анимация
    const intro = document.querySelector('.intro-overlay');
    const container = document.querySelector('.container');
    setTimeout(() => {
        intro.style.pointerEvents = 'none';
        container.classList.add('visible');
    }, 2200);
}); 