import "./Item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../Store/hooks";
import { switchCartBox } from "../../../Store/reducer";
export default function Item({ url, name, info, price }) {
  const [state, dispatch] = useStore();
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
        <p>{info}</p>
      </div>
      <div className="item__shopping">
        <h3>{price}$</h3>
        <button
          onClick={() => {
            dispatch(switchCartBox(true));
          }}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            color="white"
            style={{ fontSize: "20px" }}
          />
        </button>
      </div>
    </div>
  );
}
