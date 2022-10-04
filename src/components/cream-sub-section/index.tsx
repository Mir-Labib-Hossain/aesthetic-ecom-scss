import "./cream-sub-section.scss";

type Props = {
  src: string;
  title: string;
};

const CreamSubSection = ({ src, title }: Props) => {
  return (
    <section className="block">
      <img src={src} alt={title} />
      <p>{title}</p>
    </section>
  );
};

export default CreamSubSection;
