import { initThemeToggle, initSmoothScroll } from './_theme.js';
import { initAccordion } from './_accordion.js';
import { initFormLogic } from './_form-logic.js';

// Tema değiştirme, tarayıcının body class'ını hızlıca ayarlaması için
initThemeToggle(); 

document.addEventListener('DOMContentLoaded', () => {
    
    // Modül Başlatıcıları (Tema başlatıcısı yukarı taşındı)
    initSmoothScroll();
    initAccordion();
    initFormLogic();

    // Diğer Dinamik Özellikler
    
    // Header Gölgesi (Scroll Efekti)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Hero Bölümü Giriş Animasyonu
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100); 
    }
});