import "./CartItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function CartItem({ url, name, price, quantity }) {
  return (
    <tr style={{ borderBottom: "1px solid #ebeeee" }}>
      <td className="flex a-center">
        <div className="image">
          <img src={url} alt="" />
        </div>
        <div className="text flex f-column">
          <span className="name">
            <a href="#">{name}</a>
          </span>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <div className="quantity flex a-center j-spaceBetween">
          <span className="quantiy__minus">
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className="quantity__number">{quantity}</span>
          <span className="quantity__plus">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </td>
      <td>
        <span>
          $
          {Number(
            (
              quantity *
              Number(price.split("").splice(1, price.length).join(""))
            ).toFixed(2)
          )}
        </span>
      </td>
      <td>
        <span className="btn-delete">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </td>
    </tr>
  );
}
