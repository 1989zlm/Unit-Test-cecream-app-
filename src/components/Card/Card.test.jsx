import { render, screen } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

//item'ı scoops ta item={i} olarak tanıtmıştık.. burada ilke tanıtacağımız ve tek kart tanımlayacağımız için açıklamalı ve item={item} şeklinde yazıyoruz

const item = {
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
};

//prop olarak veri alan bir bileşeni test ediyorak aldığı propların benzerini göndermemiz gerekir

test("miktar, başlık ve fotoraf gelen veriye göre ekrana basılır", () => {
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}} //!aiağıda
    />
  );
  //mıktar spanını çağır
  const amount = screen.getByTestId("amount");

  //mıktar 5mı kontrol et
  expect(amount.textContent).toBe("5");

  //choclate yazısı ekrana basıldımı(eleman varmı diye kontrol ediyosak onu çağırmamız yeterli.)
  screen.getByText("Chocolate");

  //içersinde src değeri "/images/chocolate.png" olan resim varmı( resmi alt etiketine göre çağırıyoruz.) ve aşağıda da başka bi iş için kullanıcağımızdan yani src sınıde kontrol ettiğimiz için consta atıyoruz
  //resim elmentini al 1
  const image = screen.getByAltText("çeşit-resim");

  //src değeri "/images/chocolate.png" mi
  expect(image).toHaveAttribute("src", item.imagePath);
});

//parametreler doğru zamanda doğru yerde çalışıyormu(yukarıda test etmediğimiz için boş fonksiyon verip geçiştirmiştik burada test ediyoruz)

test("Butonların tıklanınca fonksiyonlar doğru parametreler ile çalışır", async () => {
  const user = userEvent.setup();
  // prop olarak scoops bileşeninden gönderilen orjinal fonksiyonları göndermyiceğimizden fonksiyonlar doğru şekilde doğru zamanda doğru parmetreler ile çalışıyor mu kontrolünü yapabilmek için asıl fonksiyonu taklit eden mock fonksiyonu tanımlamak gerekir
  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      amount={3}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );
  //butonları al
  const addBtn = screen.getByRole("button", { name: /ekle/i });
  const clearBtn = screen.getByRole("button", { name: /Sıfırla/i });
  //ekle butonuna tıkla
  await user.click(addBtn);

  //addtobasket fonk. doğru parametlereri alarak çalıştımı ?
  expect(addMockFn).toHaveBeenCalledWith(item);

  //sıfırla butonuna tıkla
  await user.click(clearBtn);

  //clearfrombasket fonkç. doğru paramatereleri alarak çalıştımı
  expect(clearMockFn).toHaveBeenCalledWith(item.name);
  //   expect(clearMockFn).toHaveBeenCalledWith('Chocolate');boylede olur
  //
});

//!addtoBasket ve clearfrom basket methodu scoops ta state güncelleyen bir eleman olduğu için export edilemz, Kopyası yazılamaz.. ve baktığımız zaman bizim için mıktar başlık ve fotoğraf ekrandamı o önemli oyuzden buralara biz boş fonksiyon tanımlıyoruz.
