import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/toppings")
      .then((res) => setData(res.data));
  }, []);

  //ürüne tıklandığında çalışır( tiklenirse elemanı baskete ekle, tik kaldırıyıysa elemanı kaldır )
  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
  // console.log(basket);
  return (
    <div className="container">
      <h1>Sos Çeşitleri</h1>
      <p>
        Tanesi <span className="text-success">3</span>₺
      </p>
      <h3>
        Soslar Ücreti{" "}
        <span data-testid="total" className="text-success">
          {basket.length * 3}
        </span>
        ₺
      </h3>
      <div className="row gap-3 p-3">
        {data.map((item) => (
          <div className=" top-card col" style={{ width: "150px" }}>
            <label
              htmlFor={item.name}
              className="d-flex flex-column align-items-center gap-3"
            >
              <img height={100} src={item.imagePath} alt="" />
              <p className="text-nowrap text-center">{item.name}</p>
            </label>
            {/* mapin dışında bir eleman olupğu için iki bilgi göndemeliyiz, 1)inputu tikledim mi, tiki kaldırdım mı(inputun tiklenme olayı yani e.target.checked), 2) hangi sosu tıkladım bu yüzden(item) yazarız  */}
            <input
              onChange={(e) => {
                handleChange(e.target.checked, item);
              }}
              className="d-none"
              id={item.name}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;

// resme tıklayınca checkbox tıklansın diye resmi kapsayan divi label olarak değiştirdik ve htmlFor verdik ve inputa id tanıladık sonra ınout görğnmesi diye classnameine display none verdik
