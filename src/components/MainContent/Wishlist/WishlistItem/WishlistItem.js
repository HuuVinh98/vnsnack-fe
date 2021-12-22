import "./WishlistItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
export default function WishlistItem({ url, name }) {
  return (
    <div class="wishlist-item">
      <div class="wishlist-item__image">
        <img src={url} alt="" />
        <span class="btn-delete flex a-center j-center">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div class="wishlist-item__option">
        <p>{name}</p>
        <div class="item-option flex j-spaceBetween">
          <button class="item-option__btn-add">Add to cart</button>
          <span class="item-option__btn-view">
            <a href="/product">
              <FontAwesomeIcon icon={faSearchPlus} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
