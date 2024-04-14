import { render, screen, fireEvent, getAllByTestId } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event"


/*
 ! Seçiciler > 3 ana parçadan oluşur

 ? Method [All] BySeçici
 * method > get | find | query

 * get > başlangıçta dom'da olan elementleri almak için kullanlır | elementi bulamazsa test failler(hata verir)
 
 * query > get ile benzer çalışır | element bulunamazsa null döndürür ve test devam eder 
 
 * find > elementin ne zaman ekrana basılacağı belli değilse kullanılır (api isteklerinde)
 
 * not: find methodu promise döndürür
 * bu yüzden async awail ile kullanılmalı
 
 * eğer methoda all eklersek seçicinin koşuluna uyan bütün elementleri alır
 * all kullanırsak her zaman dizi şeklinde cevap alırız
*/




test("API'den gelen veriler için ekrana kartlar basılır", async () => {
    //1)kartları ekrana bas
    render(<Scoops />)

    //2)kartları sec ama birsuru div var o yuzden kartı almakla resmi almak aynı şey divi almaya gerek yok içindeki elemanı alıyoruz oyuzden getbyalttext diyoruz.fakat apiden geldiği için veriler findbyalttext'kullanıyoruz ki veriler geç gelirse hata vermesin. ama çeşit-resim başlığına uyan birkaç elema olduğu içinde findAlllByAltText yazarız. .primise old.için async await kullnılr
    //ekrana basılan resimleri al
    const images = await screen.findAllByAltText('çeşit-resim');

    //gelen resimerin sayısını 1'den buyuk veya eşit mu
    expect(images.length).toBeGreaterThanOrEqual(1);



    // console.log('RESİMRESİMRESİMRESİM', images.length)
})

test('çeşitlerin ekleme ve sıfırlama işlemleri çalışır', async () => {
    //usereventin kurulumu
    const user = userEvent.setup();

    //bileşeni ekrana bas
    render(<Scoops />);

    // bütün ekleme ve sıfırlama butonlarını çağır
    const addButtons = await screen.findAllByRole('button', { name: /ekle/i });

    const delButtons = await screen.findAllByRole('button', { name: /sıfırla/i });

    // console.log(delButtons.length)

    // toplam fiyat elementini çağır(index.js te spana id verdik.)
    const total = screen.getByTestId('total');

    // toplam fiyatı 0 mı kontrol et
    expect(total.textContent).toBe('0'); //bu birebir aynımı
    // expect(total).toHaveTextContent(0); bu içinde 0 varmı demek 

    // ekle butonlarından birine tıkla
    await user.click(addButtons[0]);

    // toplam fiyatın 20 mı kontrol et
    expect(total.textContent).toBe('20');

    // ekle butonlarından birine 2 kez tıkla
    await user.dblClick(addButtons[2]);

    // toplam fiyatı 60 mı kontrol et
    expect(total.textContent).toBe('60');

    // ilk ekleneni kaldır
    await user.click(delButtons[0]);

    // toplam fiyatı 40 mı kontrol et
    expect(total.textContent).toBe('40');

    // son eklenini kaldır
    await user.click(delButtons[2]);

    // toplam fiyatı 0 mı kontrol et
    expect(total.textContent).toBe('0');

})