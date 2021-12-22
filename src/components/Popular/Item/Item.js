import "./Item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export default function Item({ url, name, desc, price }) {
  return (
    <div class="item">
      <div className="item__image">
        <FontAwesomeIcon
          icon={faHeart}
          className="fa-icon"
          color="#c4c4c4"
          style={{ fontSize: "25px" }}
        />
        <a href="/product">
          <img src={url} alt="" style={{ width: "200px", height: "200px" }} />
        </a>
      </div>
      <div class="item__text">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item__shopping">
        <h3>{price}</h3>
        <button>
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </button>
      </div>
    </div>
  );
}
