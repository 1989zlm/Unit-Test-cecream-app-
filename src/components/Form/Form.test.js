import { fireEvent, render, screen } from "@testing-library/react"
import Form from "."




test('koşulların onaylanmasına göre buton aktifliği', () => {
    //1)test edilecek olan bileşen render edilir
    render(<Form />)

    //2)gerekli elemanları çağır
    //!rolleri bulmak için html checbox input role diye aratırız google da 
    const button = screen.getByRole('button')
    const checkbox = screen.getByRole('checkbox')
    //3)checkbox tiklenmemiş olduğunu kontrol et
    expect(checkbox).not.toBeChecked();

    //4) butonun inaktif olduğunu kontrol et
    expect(button).toBeDisabled();

    //5) checkboxa tıkla
    fireEvent.click(checkbox);

    //6) butonun aktif olduğunu kontrol et
    expect(button).toBeEnabled();

    //7) checkboxa tekrar tıkla
    fireEvent.click(checkbox);

    //8) butonun inaktif olduğunu kontrol et
    expect(button).toBeDisabled();
});

//? form.jsx te olmayan bişeyi test edeceğiz.sonra indexte yazacağız

test(
    'onay butonunun hover durumuna göre bildirim gözükür', () => {
        //1) formu renderla
        render(<Form />);

        //2) gerekli elemanları al
        const checkbox = screen.getByRole('checkbox');
        const button = screen.getByRole('button');
        // screen.getByText('Size gerçekten bir şey teslim etmeyeceğiz')bunun yerine
        //! regex tanımlıyoruz. yani içinde size gerçekten yazan bir yazı var i ise insenstive yani buyuk kucuk harfe duyarlı olmaya gerek yok demek
        const alert = screen.getByText(/size gerçekten/i);

        //3) checkboxu tikle(buton aktif hale gelir)
        fireEvent.click(checkbox);

        //4) bildirimin ekranda olmadığını yani gözükmediğini kontrol et
        expect(alert).not.toBeVisible();

        //5) mouse'u butona getir
        fireEvent.mouseEnter(button);

        //6) bildirim ekrana geldimi kontrol et
        expect(alert).toBeVisible();

        //7)mouse butondan geri çek
        fireEvent.mouseLeave(button);

        //8)bildirim ekrandan gtitimi kontrol et
        expect(alert).not.toBeVisible();
    }
)
