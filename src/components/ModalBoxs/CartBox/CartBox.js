import "./CartBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartBoxItem from "./CartBoxItem/CartBoxItem";
import mucrim from "../../../images/mucrim.png";
export default function CartBox() {
  return (
    <div className="cart-box flex f-column">
      <div className="cart-box__header flex j-spaceBetween">
        <span>
          Cart(<span id="items-in-cart">0</span>)
        </span>
        <span className="close-cart">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div className="cart-box__items flex f-column j-start">
        {/* ------------------------------- add item */}
        <CartBoxItem
          url={mucrim}
          name="Squid married Satay"
          price="$30"
          quantity={2}
        />
        {/* ------------------------------- add item */}
      </div>
      <div className="cart-box__footer flex f-column">
        <div className="subtotal flex j-spaceBetween">
          <span>Subtotal:</span>
          <span id="subtotal" style={{ fontSize: "20px" }}></span>
        </div>
        <button className="flex j-center a-center">
          <a href="/cart">View Cart</a>
        </button>
        <button className="flex j-center a-center">
          <a href="/checkout">Checkout</a>
        </button>
      </div>
    </div>
  );
}
