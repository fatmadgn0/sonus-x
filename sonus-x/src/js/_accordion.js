
// SSS (Accordion) İşlevi

export function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true' || false;
            const content = header.nextElementSibling;
            
            // Tekli Açılır Mantık: Tüm accordionları kapat ve işaretlerini sıfırla
            document.querySelectorAll('.accordion-header').forEach(h => {
                if (h !== header) {
                    h.setAttribute('aria-expanded', 'false');
                    h.nextElementSibling.setAttribute('hidden', 'true');
                    h.nextElementSibling.style.maxHeight = '0';
                    h.nextElementSibling.style.paddingTop = '0'; // Padding sıfırlama
                    h.nextElementSibling.style.paddingBottom = '0'; // Padding sıfırlama
                }
            });

            // Tıklananı aç/kapat
            header.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                // Açılıyor
                content.removeAttribute('hidden');

                content.style.paddingTop = '10px';
                content.style.paddingBottom = '15px';

                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                // Kapanıyor
                content.style.maxHeight = '0';
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';

                setTimeout(() => {
                    content.setAttribute('hidden', 'true');
                }, 300); 
            }
        });
    });
}