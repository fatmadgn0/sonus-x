# SONUS X - Akıllı Hoparlör Lansman Sayfası

Bu proje, modern bir akıllı hoparlör olan SONUS X için tek sayfalık (single-page) bir ürün tanıtım (landing) sayfasıdır. Proje, Vanilla JavaScript (yalın JS), modern CSS (CSS değişkenleri ile Dark/Light tema) ve yüksek erişilebilirlik standartlarına uygun olarak geliştirilmiştir.

## Başlarken

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin.

### Önkoşullar

Projenin bir sunucu ortamında çalışması zorunluluğu yoktur, sadece bir web tarayıcısı yeterlidir.

### Kurulum

1.  1.  Bu repository'yi klonlayın veya zip olarak indirin.
    ```bash
    git clone [https://github.com/fatmadgn0/sonus-x.git](https://github.com/fatmadgn0/sonus-x.git) 
    ```
2.  Proje dizinine gidin.
    ```bash
    cd sonus-x-landing-page
    ```
3.  Ana dosya olan `sonus-x/index.html` dosyasını tarayıcınızda açın.

## Özellikler

Proje gereksinimlerine uygun olarak hayata geçirilen temel özellikler:

- **Tek Sayfalık Yapı**: Hero, Özellikler, Fiyat Kartları, SSS (Accordion), Galeri, İletişim Formu (yalancı submit) bölümlerini içerir.
- **Temalı Arayüz**: CSS değişkenleri (`--bg-primary`, `--text-color` vb.) kullanılarak Dark/Light Tema desteği sağlanmıştır (`sonus-x/src/styles/_variables.css`). Tema, sağ üstteki ampul ikonu (`💡`) ile değiştirilebilir ve `localStorage`'a kaydedilir (`sonus-x/src/js/_theme.js`).
- **Duyarlı Tasarım (Responsive)**: Grid/Flexbox düzenleri ve 3 ana breakpoint ile mobil uyumluluk sağlanmıştır.
- **Erişilebilirlik (A11y)**:
  - Klavye ile tam erişim ve gezinme (`tabindex`, `:focus` stilleri).
  - Tüm etkileşimli bileşenlerde uygun **ARIA** nitelikleri kullanılmıştır (Accordion, Navigasyon, Tema Düğmesi).
  - Görsel olarak gizlenen metinler için `.visually-hidden` sınıfı (`sonus-xsrc/styles/base.css`).
- **SSS (Accordion) Bileşeni**: Yalnızca bir öğenin açık olabileceği tekli açılır mantık ile çalışır. Erişilebilirlik için `aria-expanded` ve `role="tab"` kullanılmıştır (`sonus-x/src/js/_accordion.js`).
- **Form Doğrulama**: Yalın JavaScript ile boş alan ve temel e-posta formatı kontrolü yapılır. Başarılı gönderimde formu temizler ve onay mesajı gösterir (`sonus-x/src/js/_form-logic.js`).
- **Yumuşak Kaydırma**: Navigasyon linkleri için yumuşak kaydırma efekti (`sonus-x/src/js/_theme.js`).

## Teknolojiler

- **HTML5** (Semantik)
- **CSS3** (Modern CSS, CSS Değişkenleri, PostCSS opsiyonel)
- **JavaScript** (Vanilla JS)

## Proje Yapısı

| Dosya Adı                          | Açıklama                                                                           

| `sonus-x/index.html`            | Ana HTML yapısı ve bileşenleri.                                                    |
| `sonus-x/src/js/main.js`        | Modül başlatıcısı, Header Scroll ve Hero animasyonu (`DOMContentLoaded` yönetimi). |
| `sonus-x/src/js/_theme.js`      | Tema değiştirme (Dark/Light) ve Yumuşak Kaydırma mantığı.                          |
| `sonus-x/src/js/_accordion.js`  | SSS (Accordion) tekli açılır mantığı ve erişilebilirlik yönetimi.                  |
| `sonus-x/src/js/_form-logic.js` | Form doğrulama ve gönderim başarısı mantığı.                                       |
| `sonus-x/src/styles/`           | CSS değişkenleri, temel, düzen ve bileşen stillerini içerir.                       |
| `sonus-x/img/`                  | Ürün görselleri ve ikonlar.                                                        |

## Teslimatlar ve Raporlama

- **Teslimat Ortamı**: Proje, Vercel/Netlify gibi bir platformda barındırılmaya hazır bir yapıdadır.
- **Kod Kalitesi**: Kod standartlarına Prettier, ESLint ve Conventional Commits kurallarına uyulmuştur.

---

## Lisans

Bu proje lisanslandırılmamıştır.

##

- [Fatma DOĞAN] - (Proje Geliştiricisi)
