import "./Sale.scss";

export default function Sale({ background, name, text, price, img }) {
  return (
    <div className="sale">
      <img src={background} className="sale__background"></img>
      <div className="sale-content">
        <div className="sale-content__text">
          <h3>{name}</h3>
          <p>{text}</p>
          <h4>{price}</h4>
        </div>
        <img className="sale-content__img" src={img}></img>
      </div>
    </div>
  );
}
