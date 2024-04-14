import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

//ücret güncellendimi
test("sosları ekleme ve çıkarma işlemleri toplama etki eder", async () => {
  //kullnaıcı işlemleri teikleneceği için user evet
  const user = userEvent.setup();

  //   const tot = total.textContent;

  //1 bileşeni renderla
  render(<Toppings />);

  //2 toplam spanı al
  const total = screen.getByTestId("total");

  //3) bütün sos checkboxlarını(kartları) al //!kartın içindeki bi elemanı almak kartı almakla aynıdır illa kapsayıcı dıvle butun kartları almamıza gerek yok almamıza gerek yok
  //!kart veriler apiden geç geldiği için hata veriyor o yuzden get i kaldırıp yerine find yazdık ve async await ekledik
  const toppings = await screen.findAllByRole("checkbox");

  //4) toplam ücret 0 mı kontrol et
  expect(total.textContent).toBe("0");

  //5) bütün checkboxları tiksiz olduğunuu kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());

  //6) soslardan birine tıkla
  await user.click(toppings[0]);

  //7) total 3'eşit mi kontrol et
  expect(total.textContent).toBe("3");

  //8) soslardan birine daha tıkla
  await user.click(toppings[4]);

  //9) total 6'ya eşit mi kontrol et
  expect(total.textContent).toBe("6");

  //10) eklenen soslardan birini çıkar
  await user.click(toppings[4]);

  //11) total 3'e şitmi kontrol et
  expect(total.textContent).toBe("3");

  //12) eklenen son sosu çıkar
  await user.click(toppings[0]);

  //13) total sıfıra eşitmi kontrol et
  expect(total.textContent).toBe("0");
});
