# Seçiciler Selectors

- - https://testing-library.com/docs/ecosystem-testing-library-selector/

# Eşleştiriciler Matchers

- - https://github.com/testing-library/jest-dom

# Html Element Rolleri

- - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Kütüphaneler

- axios@^0.27.2
- @testing-library/user-event@14.0
- json sunucusu(json-server) ("server": "json-server --watch db.json --port 4000")
- önyükleme bootstrap

# Test Geliştirme Süreçleri

# TDD (Test Odaklı Geliştirme) (Test Driven Development)

- - kırmızıdan yeşile testi /red to green test
- - Önce özelliğin / cihazın testi yapan kişinin ardından özellik kodlanır
- - Artıları, testler bir yük gibi gelmiyor. Geliştirme sürekliliği bir paraçası oluyor. Testleri yazarken dinamik bakımınıda oluşturduğumuz için işlevsellik daha hızlı kodlayabiliyoruz

# BDD (Davranış Odaklı Geliştirme)(Behaviour Driven Development)

- - Önce özellikler/ürünler geliştirildikten sonra test edilirler.

# FireEvent

- - rtl içerisinde gelen olayı tetikleme yöntemi
- - gerçek kullanımdan uzak tepkiler bugün için userEvente'i bıraktı
- - teitklenen olaylar gerçek bir insanın gerçekleştirebileceği tepkiden çok daha hızlı bir şekilde tetikleniyor

# UserEvent

- - bu yolu kullanmak için userEvent paketi indirilmeli
- - fireEvent'in modern daha gelişmiş versiyonu
- - tetiklediğimiz olaylar gerçek kulalnıcının yağıcağı gibi gecikmeli bir gecikmenin ardından gerçekleşebilir
- - gecikme olduğunda async wait ile kullanırız
