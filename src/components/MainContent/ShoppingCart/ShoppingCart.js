import "./ShoppingCart.scss";
import CartItem from "./CartItem/CartItem";
import Payment from "./Payment/Payment";
import exfish from "../../../images/mucrim.png";
export default function ShoppingCart() {
  return (
    <div class="shopping-cart">
      <div class="container">
        <div class="content">
          <h1>Shopping Cart</h1>
          <div id="shopping-list">
            <table>
              <tr style={{ borderBottom: "1px solid #ebeeee" }}>
                <td>PRODUC DETAILS</td>
                <td>UNIT PRICE</td>
                <td>QUANTITY</td>
                <td>AMOUNT</td>
              </tr>
              <CartItem
                url={exfish}
                name="Squid Married Satay"
                price="$30"
                quantity={3}
              ></CartItem>
            </table>
          </div>

          <div class="cart-option flex j-spaceBetween">
            <button id="clear-cart">Clear cart</button>
            <button id="update-cart">Update shopping cart</button>
          </div>
        </div>

        <Payment />
      </div>
    </div>
  );
}
