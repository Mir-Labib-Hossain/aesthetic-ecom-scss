import Card from "../card";
import "./card-section.scss";

const images = ["https://cdn.shopify.com/s/files/1/0026/6842/9381/products/b1_134074af-a6bb-472b-820c-efcafc6e66b2_613x.jpg?v=1653151873", "https://i.pinimg.com/736x/e7/5b/9b/e75b9b039ce65d9c47913c5d345875ca.jpg", "https://i.pinimg.com/564x/f5/aa/ab/f5aaab7ad5629a2204255018e8e87232.jpg", "https://i.pinimg.com/736x/56/a1/5f/56a15ff2786262dae7d9756eaa9d24f8.jpg"];

const CardsSection = () => {
  return (
    <section className="cards-section container">
      {images.map((img: string) => (
        <Card src={img} key={img} />
      ))}
    </section>
  );
};

export default CardsSection;
