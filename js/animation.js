// animations.js - Заметные анимации для сайта Hotelo

document.addEventListener('DOMContentLoaded', function() {
    console.log('Анимации загружены!');

    // 1. АНИМАЦИЯ ГЕРОЯ (hero section)
    const animateHeroSection = () => {
        const heroTitle = document.querySelector('.hero__title');
        const heroDescription = document.querySelector('.hero__description');
        const searchBox = document.querySelector('.search-box');
        const heroImages = document.querySelectorAll('.hero__main-image, .hero__secondary-image');

        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateX(-100px)';
            heroTitle.style.transition = 'all 1s ease-out';

            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateX(0)';
            }, 500);
        }

        if (heroDescription) {
            heroDescription.style.opacity = '0';
            heroDescription.style.transform = 'translateX(-100px)';
            heroDescription.style.transition = 'all 1s ease-out 0.3s';

            setTimeout(() => {
                heroDescription.style.opacity = '1';
                heroDescription.style.transform = 'translateX(0)';
            }, 800);
        }

        if (searchBox) {
            searchBox.style.opacity = '0';
            searchBox.style.transform = 'scale(0.8) translateY(50px)';
            searchBox.style.transition = 'all 0.8s ease-out 0.6s';

            setTimeout(() => {
                searchBox.style.opacity = '1';
                searchBox.style.transform = 'scale(1) translateY(0)';
            }, 1100);
        }

        // Анимация изображений героя
        heroImages.forEach((img, index) => {
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            img.style.transition = `all 0.8s ease-out ${0.8 + index * 0.2}s`;

            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, 1000 + index * 200);
        });S
    };

    // 2. АНИМАЦИЯ КАРТОЧЕК УСЛУГ (facilities section)
    const animateFacilities = () => {
        const facilityCards = document.querySelectorAll('.facility-card');
        
        facilityCards.forEach((card, index) => {
            // Начальное состояние
            card.style.opacity = '0';
            card.style.transform = 'translateY(100px) rotate(5deg)';
            card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;

            // Анимация при наведении
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-20px) rotate(0deg) scale(1.05)';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0deg) scale(1)';
                this.style.boxShadow = '0 4px 4px rgba(0,0,0,0.04)';
            });
        });

        // Запускаем анимацию появления при скролле
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    facilityCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) rotate(0deg)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.querySelector('.facilities'));
    };

    // 3. АНИМАЦИЯ СЕКЦИИ ABOUT
    
const animateAboutSection = () => {
    const aboutImage = document.querySelector('.about__image');
    const aboutText = document.querySelector('.about__text');
    const stats = document.querySelectorAll('.about__stat-item');

    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(-100px) scale(0.9)';
        aboutImage.style.transition = 'all 1s ease-out';
    }

    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(100px) scale(0.9)';
        aboutText.style.transition = 'all 1s ease-out 0.3s';
    }

    // Анимация статистики
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'scale(0)';
        stat.style.transition = `all 0.5s ease-out ${0.6 + index * 0.1}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (aboutImage) {
                    aboutImage.style.opacity = '1';
                    aboutImage.style.transform = 'translateX(0) scale(1)';
                }
                if (aboutText) {
                    aboutText.style.opacity = '1';
                    aboutText.style.transform = 'translateX(0) scale(1)';
                }

                stats.forEach((stat, index) => {
                    setTimeout(() => {
                        stat.style.opacity = '1';
                        stat.style.transform = 'scale(1)';
                        
                        // Анимация чисел с сохранением суффиксов
                        const numberElement = stat.querySelector('.about__stat-number');
                        if (numberElement) {
                            const originalText = numberElement.textContent;
                            // Сохраняем суффикс (K+, Y+ и т.д.)
                            const suffix = originalText.replace(/\d/g, '');
                            // Извлекаем только числовую часть
                            const numberMatch = originalText.match(/\d+/);
                            if (numberMatch) {
                                const finalNumber = parseInt(numberMatch[0]);
                                let currentNumber = 0;
                                const duration = 1500;
                                const increment = finalNumber / (duration / 16);
                                
                                const counter = setInterval(() => {
                                    currentNumber += increment;
                                    if (currentNumber >= finalNumber) {
                                        numberElement.textContent = finalNumber + suffix;
                                        clearInterval(counter);
                                    } else {
                                        numberElement.textContent = Math.floor(currentNumber) + suffix;
                                    }
                                }, 16);
                            }
                        }
                    }, index * 200);
                });
                
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(document.querySelector('.about'));
};

    // 4. АНИМАЦИЯ КАРТОЧЕК ОТЕЛЕЙ (hotels section)
    const animateHotelCards = () => {
        const hotelCards = document.querySelectorAll('.hotel-card');
        const filterButtons = document.querySelectorAll('.hotels__filter-btn');

        // Анимация кнопок фильтров
        filterButtons.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(-30px)';
            btn.style.transition = `all 0.5s ease-out ${index * 0.1}s`;

            // Анимация при клике
            btn.addEventListener('click', function() {
                filterButtons.forEach(b => b.classList.remove('hotels__filter-btn--active'));
                this.classList.add('hotels__filter-btn--active');
                
                // Эффект пульсации для активной кнопки
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            });
        });

        // Анимация карточек отелей
        hotelCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(100px) rotateY(30deg)';
            card.style.transition = `all 0.8s ease-out ${index * 0.2}s`;

            // Эффекты при наведении
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-25px) rotateY(0deg) scale(1.05)';
                this.style.boxShadow = '0 30px 60px rgba(0,0,0,0.3)';
                
                // Анимация кнопки
                const btn = this.querySelector('.hotel-card__details-btn');
                if (btn) {
                    btn.style.transform = 'scale(1.1)';
                    btn.style.backgroundColor = '#2a5db0';
                }
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-10px) rotateY(0deg) scale(1)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                
                const btn = this.querySelector('.hotel-card__details-btn');
                if (btn) {
                    btn.style.transform = 'scale(1)';
                    btn.style.backgroundColor = '#3771c8';
                }
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Показываем кнопки фильтров
                    filterButtons.forEach((btn, index) => {
                        setTimeout(() => {
                            btn.style.opacity = '1';
                            btn.style.transform = 'translateY(0)';
                        }, index * 100);
                    });

                    // Показываем карточки
                    hotelCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(-10px) rotateY(0deg)';
                        }, 500 + index * 200);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.querySelector('.hotels'));
    };

    // 5. АНИМАЦИЯ ТЕСТИМОНИАЛА
    const animateTestimonial = () => {
        const testimonialCard = document.querySelector('.testimonial__card');
        
        if (testimonialCard) {
            testimonialCard.style.opacity = '0';
            testimonialCard.style.transform = 'scale(0.8) rotate(-5deg)';
            testimonialCard.style.transition = 'all 1s ease-out';

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        testimonialCard.style.opacity = '1';
                        testimonialCard.style.transform = 'scale(1) rotate(0deg)';
                        
                        // Анимация появления контента внутри
                        const content = testimonialCard.querySelector('.testimonial__content');
                        if (content) {
                            content.style.opacity = '0';
                            content.style.transform = 'translateY(50px)';
                            content.style.transition = 'all 0.8s ease-out 0.5s';
                            
                            setTimeout(() => {
                                content.style.opacity = '1';
                                content.style.transform = 'translateY(0)';
                            }, 600);
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(testimonialCard);
        }
    };

    // 6. АНИМАЦИЯ NEWSLETTER
    const animateNewsletter = () => {
        const newsletter = document.querySelector('.newsletter__content');
        
        if (newsletter) {
            newsletter.style.opacity = '0';
            newsletter.style.transform = 'translateY(100px) scale(0.95)';
            newsletter.style.transition = 'all 0.8s ease-out';

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        newsletter.style.opacity = '1';
                        newsletter.style.transform = 'translateY(0) scale(1)';
                        
                        // Анимация формы (но без анимации кнопки Subscribe)
                        const form = newsletter.querySelector('.newsletter__form');
                        if (form) {
                            form.style.opacity = '0';
                            form.style.transform = 'translateX(-100px)';
                            form.style.transition = 'all 0.6s ease-out 0.4s';
                            
                            setTimeout(() => {
                                form.style.opacity = '1';
                                form.style.transform = 'translateX(0)';
                            }, 500);
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(newsletter);
        }
    };

    // 7. АНИМАЦИЯ ФУТЕРА
const animateFooter = () => {
    const footer = document.querySelector('.footer');
    
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(50px)';
        footer.style.transition = 'all 0.8s ease-out';

        // Анимация социальных иконок
        const socialIcons = footer.querySelectorAll('.footer__social-link');
        socialIcons.forEach((icon, index) => {
            icon.style.opacity = '0';
            icon.style.transform = 'scale(0) rotate(180deg)';
            icon.style.transition = `all 0.5s ease-out ${index * 0.1}s`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.opacity = '1';
                    footer.style.transform = 'translateY(0)';
                    
                    // Анимация социальных иконок с задержкой
                    socialIcons.forEach((icon, index) => {
                        setTimeout(() => {
                            icon.style.opacity = '1';
                            icon.style.transform = 'scale(1) rotate(0deg)';
                        }, 300 + index * 100);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Срабатывает когда 10% элемента видно
            rootMargin: '0px 0px -100px 0px' // Срабатывает немного раньше
        });

        observer.observe(footer);
    }
};

    // 8. АНИМАЦИЯ КНОПОК (БЕЗ КНОПКИ SUBSCRIBE)
    const animateAllButtons = () => {
        // Исключаем кнопку .newsletter__submit из анимации
        const buttons = document.querySelectorAll('.btn, .section-heading__button, .about__btn, .hotel-card__details-btn');
        
        buttons.forEach(button => {
            // Эффект пульсации при наведении
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });

            // Эффект нажатия
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(2px) scale(0.95)';
            });

            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
        });
    };

    // 9. АНИМАЦИЯ ЛОГОТИПОВ КОМПАНИЙ
    const animateCompanyLogos = () => {
        const logos = document.querySelectorAll('.others-company__logos svg');
        
        logos.forEach((logo, index) => {
            logo.style.opacity = '0';
            logo.style.transform = 'scale(0) rotate(360deg)';
            logo.style.transition = `all 0.6s ease-out ${index * 0.2}s`;

            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.2) rotate(0deg)';
                this.style.filter = 'brightness(1.3)';
            });

            logo.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.filter = 'brightness(1)';
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    logos.forEach((logo, index) => {
                        setTimeout(() => {
                            logo.style.opacity = '1';
                            logo.style.transform = 'scale(1) rotate(0deg)';
                        }, index * 200);
                    });
                    observer.unobserve(entry.target);
                }
            });
        });

        const othersCompany = document.querySelector('.others-company');
        if (othersCompany) {
            observer.observe(othersCompany);
        }
    };

    // ИНИЦИАЛИЗАЦИЯ ВСЕХ АНИМАЦИЙ
    const initAllAnimations = () => {
        animateHeroSection();
        animateFacilities();
        animateAboutSection();
        animateHotelCards();
        animateTestimonial();
        animateNewsletter();
        animateFooter();
        animateAllButtons();
        animateCompanyLogos();

        console.log('Все анимации инициализированы!');
    };

    // Запуск анимаций
    initAllAnimations();

    // Переинициализация при изменении размера окна
    window.addEventListener('resize', function() {
        setTimeout(initAllAnimations, 100);
    });
});

// Добавляем глобальные стили для анимаций
const style = document.createElement('style');
style.textContent = `
    /* Плавные переходы для всех интерактивных элементов */
    .facility-card,
    .hotel-card,
    .btn,
    .testimonial__card,
    .newsletter__content {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
    }
    
    /* Улучшенные тени при наведении */
    .facility-card:hover,
    .hotel-card:hover {
        box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
    }
    
    /* Анимация для активных кнопок фильтров */
    .hotels__filter-btn--active {
        animation: pulse 2s infinite !important;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    /* Анимация появления */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Анимация поворота */
    @keyframes rotateIn {
        from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.3);
        }
        to {
            opacity: 1;
            transform: rotate(0) scale(1);
        }
    }
`;
document.head.appendChild(style);