import "./card.scss"

type Props = {
  src: string;
};

const Card = ({ src }: Props) => {
  return (
    <div className="card">
      <div className="card-img" style={{backgroundImage:`url(${src})`}} >
      </div>
      <div className="card-content">
        <h3>Header of card</h3>
        <div className="card-sub-content">
          <p>$199</p>
          <span>Authentic</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
