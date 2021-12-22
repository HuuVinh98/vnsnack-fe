import "./SearchItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export default function SearchItem({ url, name, price }) {
  return (
    <div className="search-item">
      <img src={url} alt="" />
      <div className="search-item__info">
        <h2>{name}</h2>
        <h3>{price}</h3>
      </div>
      <button>
        <a href="#">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </button>
    </div>
  );
}
