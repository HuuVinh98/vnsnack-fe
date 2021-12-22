import "./Promotion.scss";
import Sale from "./Sale/Sale";
import sale_bg_1 from "../../images/sale_bg_1.png";
import sale_bg_2 from "../../images/sale_bg_2.png";
import sale_bg_3 from "../../images/sale_bg_3.png";
import mucrim from "../../images/mucrim.png";
import location from "../../images/location.png";

export default function Promotion() {
  return (
    <section className="promotion">
      <div class="container">
        <div className="row">
          <div className="col-xs-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <Sale
              background={sale_bg_2}
              name="Combo"
              text="Order combo to get 20% voucher"
              price="-20%"
              img={mucrim}
            />
          </div>
          <div className="col-xs-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <Sale
              background={sale_bg_1}
              name="New Dish"
              text="Enjoy new flavors"
              price="Only 12$"
              img={mucrim}
            />
          </div>
          <div className="col-xs-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <Sale
              background={sale_bg_3}
              name="Free ship"
              text="0$ shipping on every order "
              price="<10Km"
              img={location}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
