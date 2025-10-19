
// Form Gönderimi, Onay Mesajı ve Basit Doğrulama

export function initFormLogic() {
    const preOrderForm = document.querySelector('.pre-order-form');
    const formMessage = document.getElementById('form-message'); 

    if (!preOrderForm) return;

    preOrderForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const emailInput = preOrderForm.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();
        
        // Hata mesajını temizle
        formMessage.textContent = '';

        // Basit Boş Alan Kontrolü 
        if (emailValue === '') {
            formMessage.textContent = 'Lütfen e-posta adresinizi giriniz.';
            emailInput.focus();
            return; 
        }

        // Tarayıcının kendi e-posta geçerlilik kontrolünü kullan
        if (!emailInput.checkValidity()) {

            formMessage.textContent = 'Lütfen geçerli bir e-posta adresi giriniz.';
             emailInput.focus();
             return;
        }

        // Başarılı Gönderim

        const confirmMessage = document.createElement('p');
        confirmMessage.setAttribute('role', 'status'); 
        confirmMessage.textContent = `Teşekkürler, ${emailValue}! Ön siparişiniz kaydedildi.`;
        
        // Stil atama (Form logic dosyasında stil tutarlılığını sağlamak için)
        confirmMessage.style.color = 'lightgreen';
        confirmMessage.style.marginTop = '15px';
        
        // Formu temizle ve mesajı formun yerine koy
        preOrderForm.innerHTML = '';
        preOrderForm.parentNode.appendChild(confirmMessage);
        
        // Erişilebilirlik: Odak noktasını mesaja taşı
        confirmMessage.focus();
    });
}