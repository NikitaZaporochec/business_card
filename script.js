document.addEventListener('DOMContentLoaded', () => {
    // Вращение карточки при наведении работает благодаря CSS
    
    // Дополнительная анимация при загрузке страницы
    const card = document.querySelector('.card');
    
    // Переключение языка
    const langButtons = document.querySelectorAll('.lang-btn');
    const cardRu = document.querySelector('.card-ru');
    const cardEn = document.querySelector('.card-en');
    const cardInners = document.querySelectorAll('.card-inner');
    const portfolioRu = document.querySelector('.portfolio-ru');
    const portfolioEn = document.querySelector('.portfolio-en');
    
    // Определение мобильного устройства
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Применяем разные стили в зависимости от устройства
    if (isMobile) {
        // Для мобильных: добавляем класс, отключающий hover-эффект
        document.body.classList.add('mobile-device');
        
        const cardRu = document.querySelector('.card-ru');
        const cardEn = document.querySelector('.card-en');
        
        // Добавляем русскую инструкцию
        const instructionRu = document.createElement('div');
        instructionRu.className = 'flip-instruction';
        instructionRu.textContent = 'Нажмите, чтобы перевернуть карточку';
        cardRu.appendChild(instructionRu);
        
        // Добавляем английскую инструкцию
        const instructionEn = document.createElement('div');
        instructionEn.className = 'flip-instruction';
        instructionEn.textContent = 'Tap to flip the card';
        cardEn.appendChild(instructionEn);
        
        // Обработчик клика для переворота карточки ТОЛЬКО для мобильных
        cardInners.forEach(cardInner => {
            const card = cardInner.closest('.card');
            
            card.addEventListener('click', function(e) {
                // Проверяем, не был ли клик по кнопкам языка
                if (!e.target.closest('.lang-btn')) {
                    cardInner.classList.toggle('flipped');
                    
                    // Обновляем текст инструкции
                    const instruction = this.querySelector('.flip-instruction');
                    const isRussian = this.classList.contains('card-ru');
                    
                    if (cardInner.classList.contains('flipped')) {
                        instruction.textContent = isRussian ? 'Нажмите, чтобы вернуться' : 'Tap to return';
                    } else {
                        instruction.textContent = isRussian ? 'Нажмите, чтобы перевернуть карточку' : 'Tap to flip the card';
                    }
                }
            });
        });
    }
    
    // При загрузке показываем только русскую версию кнопки портфолио
    portfolioRu.classList.add('active');
    portfolioEn.classList.remove('active');
    
    // Обработчик переключения языков
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Четко определяем видимость кнопок портфолио для каждого языка
            if (lang === 'ru') {
                // Сначала скрываем английскую версию кнопки
                portfolioEn.classList.remove('active');
                
                cardEn.classList.add('swoosh-out');
                setTimeout(() => {
                    cardEn.classList.remove('active');
                    cardEn.classList.remove('swoosh-out');
                    if (isMobile) {
                        cardEn.querySelector('.card-inner').classList.remove('flipped');
                    }
                    
                    cardRu.classList.add('active');
                    cardRu.classList.add('swoosh-in');
                    
                    // Показываем русскую версию кнопки с небольшой задержкой
                    setTimeout(() => {
                        portfolioRu.classList.add('active');
                    }, 300);
                    
                    setTimeout(() => {
                        cardRu.classList.remove('swoosh-in');
                    }, 800);
                }, 400);
            } else {
                // Сначала скрываем русскую версию кнопки
                portfolioRu.classList.remove('active');
                
                cardRu.classList.add('swoosh-out');
                setTimeout(() => {
                    cardRu.classList.remove('active');
                    cardRu.classList.remove('swoosh-out');
                    if (isMobile) {
                        cardRu.querySelector('.card-inner').classList.remove('flipped');
                    }
                    
                    cardEn.classList.add('active');
                    cardEn.classList.add('swoosh-in');
                    
                    // Показываем английскую версию кнопки с небольшой задержкой
                    setTimeout(() => {
                        portfolioEn.classList.add('active');
                    }, 300);
                    
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
        
        // Показываем русскую кнопку портфолио с задержкой
        setTimeout(() => {
            portfolioRu.classList.add('active');
        }, 1000);
    }, 2200);
}); 