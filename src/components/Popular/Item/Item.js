import "./Item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../../Store/hooks";
import { switchCartBox } from "../../../Store/reducer";
import { selectedProduct } from "../../../Store/reducer";
import { Link } from "react-router-dom";
import defaultImage from "../../../images/default-image.png";
export default function Item({ props }) {
  const [state, dispatch] = useStore(); // local state to access homepage
  return (
    <div class="item">
      <div className="item__image">
        <FontAwesomeIcon
          icon={faHeart}
          className="fa-icon"
          color="#c4c4c4"
          style={{ fontSize: "25px" }}
        />
        <a href={`/product/${props.id}`}>
          <img
            src={
              // props.photos.find((val) => val.isThumbnail === true)
              //   ? props.photos.find((val) => val.isThumbnail === true).url
              //   : defaultImage
              props.photos.length ? props.photos[0].url : defaultImage
            }
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          {/* {props.photos.length > 0 ? (
            <img
              src={props.photos.find((val) => val.isThumbnail === true).url}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          ) : (
            <img
              src={defaultImage}
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
          )} */}
        </a>
      </div>
      <div class="item__text">
        <h2>{props.name}</h2>
      </div>
      <div className="item__shopping">
        <h3>{props.price}$</h3>
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
