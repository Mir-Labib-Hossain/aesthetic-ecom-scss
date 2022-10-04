import CreamSubSection from "../cream-sub-section";
import "./cream-section.scss";

const creams: ICreams = [
  {
    src: "../../../src/assets/gift.png",
    title: "We offer Gifts Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa.",
  },
  {
    src: "../../../src/assets/box.png",
    title: "Unbox the real aestheticness, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa.",
  },
  {
    src: "../../../src/assets/bus.png",
    title: "Free delivery worldwide Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa.",
  },
  {
    src: "../../../src/assets/cart.png",
    title: "We accept all Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsa.",
  },
];

const CreamSection = () => {
  return (
    <section className="main">
      <h1 className="center-text">Our offerings</h1>
      <div className="all-exp container">
        {creams.map(({ title, src }: ICream) => (
          <CreamSubSection title={title} src={src} key={src} />
        ))}
      </div>
    </section>
  );
};

export default CreamSection;
