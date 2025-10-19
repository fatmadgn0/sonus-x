# Changelog

Tüm önemli değişiklikler bu dosyada belgelenecektir.

Bu projedeki format, [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standardına uygundur.

## [1.0.0] - 2025-10-20 (Tahmini İlk Yayın Tarihi)

### feat: Yeni Özellikler

- Landing Sayfası Ana Yapısı oluşturuldu (Hero, Features, Pricing, SSS, Gallery, Pre-Order bölümleri).
- Tema Değiştirme (Dark/Light) işlevi uygulandı ve yerel depolamaya (localStorage) entegre edildi (`sonus-x/src/js/_theme.js`).
- SSS (Accordion) bileşeni, tekli açılır mantık ve erişilebilirlik (ARIA) desteği ile tamamlandı (`sonus-x/src/js/_accordion.js`).
- Form doğrulama (boş ve geçerlilik) mantığı ve yalancı gönderim/onay mesajı eklendi (`sonus-x/src/js/_form-logic.js`).
- Navigasyon linkleri için yumuşak kaydırma (Smooth Scroll) özelliği eklendi (`sonus-x/src/js/_theme.js`).

### style: Stil Düzenlemeleri

- CSS Değişkenleri (`_variables.css`) ile Dark/Light tema renk paleti tanımlandı.
- Tüm bileşenler için temel CSS stilleri (Base, Layout, Card, Form, Accordion) oluşturuldu.
- Header için scroll efekti ve Hero bölümü için giriş animasyonu eklendi (`sonus-x/src/js/main.js`).

### fix: Hata Düzeltmeleri

- Formun mobil cihazlarda düzgün görünmesi için stil düzeltmeleri yapıldı (`sonus-x/src/styles/components/_form.css`).
- `_accordion.js` dosyasında dolgu (padding) geçişleri ile animasyon tutarlılığı sağlandı.

### docs: Dokümantasyon

- Proje kurallarına uygun olarak `README.md` ve `CHANGELOG.md` dosyaları oluşturuldu.
