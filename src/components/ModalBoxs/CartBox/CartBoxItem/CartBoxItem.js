import "./CartBoxItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function CartBoxItem({ url, name, quantity, price }) {
  return (
    <div className="cart-item flex">
      <div className="cart-item__image">
        <img src={url} />
      </div>
      <div className="cart-item__info flex f-column a-start">
        <p className="name">{name}</p>
        <div className="quantity flex a-center">
          <span className="btn-minus">
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className="sub-quantity">{quantity}</span>
          <span className="btn-plus">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>
      <div className="flex f-column a-end right">
        <span className="delete-item">
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <span>
          $
          {Number(
            (
              quantity *
              Number(price.split("").splice(1, price.length).join(""))
            ).toFixed(2)
          )}
        </span>
      </div>
    </div>
  );
}
