import "./Checkout.scss";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import exfish from "../../../images/exfish.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faGift, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {
  return (
    <div className="checkout container flex j-spaceBetween">
      <div className="checkout__billing-details">
        <div className="questions">
          <div className="question flex">
            <FontAwesomeIcon icon={faUser} />
            <span>
              Returning customer? <a href="#">Click here to login</a>
            </span>
          </div>
          <div className="question flex">
            <FontAwesomeIcon icon={faGift} />
            <span>
              Have a coupon? <a href="#">Click here to enter your code</a>
            </span>
          </div>
        </div>

        <div className="billing-details">
          <h2>Billing details</h2>
          <form action="">
            <div className="name flex j-spaceBetween">
              <div className="first-name flex f-column">
                <p>
                  First name <span style={{ color: "red" }}>*</span>
                </p>
                <input type="text" />
              </div>

              <div className="last-name flex f-column">
                <p>
                  Last name <span style={{ color: "red" }}>*</span>
                </p>
                <input type="text" />
              </div>
            </div>

            <div className="company flex f-column">
              <p>Company name (optional)</p>
              <input type="text" />
            </div>

            <div className="country flex f-column">
              <p>
                Country / Region <span style={{ color: "red" }}>*</span>
              </p>
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
            </div>

            <div className="street f-column">
              <p>
                Street address <span style={{ color: "red" }}>*</span>
              </p>
              <input type="text" placeholder="House number and street name*" />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>

            <div className="town f-column">
              <p>
                Town / City <span style={{ color: "red" }}>*</span>
              </p>
              <input type="text" />
            </div>

            <div className="county flex f-column">
              <p>County (optional)</p>
              <input type="text" />
            </div>

            <div className="postcode flex f-column">
              <p>
                Postcode <span style={{ color: "red" }}>*</span>
              </p>
              <input type="text" />
            </div>

            <div className="phone flex f-column">
              <p>
                Phone <span style={{ color: "red" }}>*</span>
              </p>
              <input type="text" />
            </div>

            <div className="email flex f-column">
              <p>
                Email address <span style={{ color: "red" }}>*</span>
              </p>
              <input type="text" />
            </div>

            <p>
              <a href="">Create an account?</a>
            </p>

            <p>
              <a href="">Ship to a different address?</a>
            </p>

            <div className="order-notes">
              <p>Order notes (optional)</p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Notes about your order, e.g. special notes for deliver."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="checkout__order-summary">
        <div className="back flex j-end">
          <a href="#">
            <FontAwesomeIcon icon={faAngleLeft} /> Back to cart
          </a>
        </div>
        <div className="order-summary">
          <h2>Order summary</h2>
          <div className="cart-list flex f-column">
            <div className="title flex j-spaceBetween">
              <span className="cart-quantity">Cart(0)</span>
              <span className="list-up">
                <i className="fas fa-angle-up"></i>
              </span>
            </div>
            <div className="list">
              {/*---------------------- add item */}
              <CheckoutItem
                url={exfish}
                name="Vulva Fish"
                price="$30"
                quantity={5}
              />
              {/*---------------------- add item */}
            </div>
          </div>
          <div className="cost">
            <div className="subtotal-section flex j-spaceBetween">
              <span>Subtotal:</span>
              <span className="subtotal"></span>
            </div>
            <div className="shipping flex j-spaceBetween">
              <span>Shipping:</span>
              <span>Local pickup</span>
            </div>
            <div className="grand flex j-spaceBetween">
              <span>Grand Total:</span>
              <span className="grand-total"></span>
            </div>
          </div>
          <form action="">
            <div className="option">
              <input
                id="bank"
                type="radio"
                value="Direct bank transfer"
                name=""
                checked
              />{" "}
              Direct bank transfer
              <br />
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>

            <div className="option">
              <input id="cash" type="radio" value="Cash on delivery" name="" />{" "}
              Cash on delivery
              <br />
              <p>Pay with cash upon delivery.</p>
            </div>
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our <a href="">privacy policy.</a>
            </p>
            <button>Place order</button>
          </form>
        </div>
      </div>
    </div>
  );
}
