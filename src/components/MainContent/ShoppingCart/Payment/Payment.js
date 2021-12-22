import "./Payment.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <div className="payment">
      <div class="coupon flex j-start a-center">
        <p>
          <FontAwesomeIcon icon={faGift} style={{ marginRight: "10px" }} />
          Have a coupon?
        </p>
        <form action="" class="flex">
          <input type="text" placeholder="Coupon code" />
          <button class="flex a-center j-center">
            <span>Apply</span>
          </button>
        </form>
      </div>

      <div class="cost-tax flex j-spaceBetween">
        <div class="cost-tax__left">
          <table>
            <tr>
              <td>Estimate shipping and tax</td>
            </tr>
            <tr>
              <td class="flex f-column j-start">
                <p>Shipping:</p>
                <p>Local pickup</p>
                <p>
                  This is only an estimate. Prices will be updated during
                  checkout.
                </p>
                <form action="" class="flex wr-wrap j-spaceBetween">
                  <select name="" id="">
                    <option value="">Afghanistan</option>
                    <option value="">Aland Islands</option>
                    <option value="">Albania</option>
                    <option value="">Algeria</option>
                    <option value="">American Samoa</option>
                    <option value="">Andorra</option>
                    <option value="">Angola</option>
                    <option value="">Anguila</option>
                    <option value="">Angtarctica</option>
                    <option value="">Antigua and Barduda</option>
                    <option value="">Argentina</option>
                    <option value="">Armenia</option>
                    <option value="">Aruba</option>
                    <option value="">Autralia</option>
                    <option value="">Austria</option>
                    <option value="">Aizerbaijan</option>
                    <option value="">Bahamas</option>
                    <option value="">Bahrain</option>
                    <option value="">Bangladesh</option>
                    <option value="">Barbados</option>
                    <option value="">Belarus</option>
                    <option value="">Belau</option>
                    <option value="">Belgium</option>
                    <option value="">Belize</option>
                    <option value="">Benin</option>
                    <option value="">Bermuda</option>
                    <option value="">Bhutan</option>
                    <option value="">Bolivia</option>
                    <option value="">Bonaire,Saint Eutatius and Saba</option>
                    <option value="">Bosnia and Herzegovina</option>
                    <option value="">Bostwana</option>
                    <option value="">Bouvet Island</option>
                    <option value="">Brazil</option>
                    <option value="">British Indian Ocean Territory</option>
                    <option value="">Brunei</option>
                    <option value="">Bulgaria</option>
                    <option value="">Burkina Faso</option>
                    <option value="">Burundi</option>
                    <option value="">Cambodia</option>
                    <option value="">Cameroon</option>
                    <option value="">Canada</option>
                    <option value="">Cape Verde</option>
                    <option value="">Cayman Islands</option>
                    <option value="">Central African Repulic</option>
                    <option value="">Chad</option>
                    <option value="">Chile</option>
                    <option value="">China</option>
                    <option value="">Christmas Island</option>
                    <option value="">Cocos (Keeling) Islands</option>
                    <option value="">Colombia</option>
                    <option value="">Comoros</option>
                    <option value="">Congo (Brazzaville)</option>
                    <option value="">Congo (Kinshasa)</option>
                    <option value="">Cook Islands</option>
                    <option value="">Costa Rica</option>
                    <option value="">Croatia</option>
                    <option value="">Cuba</option>
                    <option value="">Curacao</option>
                    <option value="">TurKey</option>
                    <option value="">United Kingdom (UK)</option>
                    <option value="">Vietnam</option>
                  </select>
                  <input type="text" placeholder="State / County" />
                  <input type="text" placeholder="Town / City" />
                  <input type="text" placeholder="Post code / ZIP" />
                </form>
                <button class="flex j-center a-center">
                  <span>Update</span>
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="cost-tax__right">
          <table>
            <tr>
              <td>Grand total</td>
            </tr>
            <tr>
              <td>
                <p class="flex j-spaceBetween">
                  <span>Subtotal:</span> <span id="subtotal"></span>
                </p>
                <p class="flex j-spaceBetween">
                  <span>Shipping:</span>
                  <span>Free!</span>
                </p>
                <p class="flex j-spaceBetween">
                  <span style={{ color: "#2c2c2c", fontSize: "18px" }}>
                    Grand total:
                  </span>
                  <span
                    id="grandtotal"
                    style={{ color: "#2c2c2c", fontSize: "18px" }}
                  ></span>
                </p>
                <button class="checkout">
                  <Link to="/checkout">CHECKOUT</Link>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
