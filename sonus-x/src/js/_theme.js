
// Tema Değiştirme (Light/Dark Toggle) ve Yumuşak Kaydırma

export function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    //  BAŞLANGIÇ TEMASINI AYARLA 
    const applyInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Varsayılan: dark
        body.setAttribute('data-theme', savedTheme);
        themeToggle.setAttribute('aria-label', `Temayı Değiştir: ${savedTheme === 'dark' ? 'Koyu' : 'Açık'}`);
    };
    
    // Tema değiştirme mantığı
    const toggleTheme = () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Temayı uygula
        body.setAttribute('data-theme', newTheme);
        // Tercihi kaydet
        localStorage.setItem('theme', newTheme);
        // Erişilebilirlik için aria-label'ı güncelle
        themeToggle.setAttribute('aria-label', `Temayı Değiştir: ${newTheme === 'dark' ? 'Koyu' : 'Açık'}`);
    };

    // DOM yüklendikten sonra ilk temayı ayarla
    applyInitialTheme();
    
    // Butona click event'i ekle
    themeToggle.addEventListener('click', toggleTheme);
}

export function initSmoothScroll() {
    // Navigasyon linklerine tıklandığında yumuşak geçiş sağlar.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}