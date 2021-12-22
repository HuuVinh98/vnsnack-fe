import "./Menus.scss";
import mucrim from "../../images/mucrim.png";
export default function Menus() {
  return (
    <div className="menus">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <a href="#">
              <div className="menu flex f-column j-spaceBetween a-center">
                <img src={mucrim}></img>
                <h4>Combo</h4>
              </div>
            </a>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <a href="#">
              <div className="menu flex f-column j-spaceBetween a-center">
                <img src={mucrim}></img>
                <h4>Squid</h4>
              </div>
            </a>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <a href="#">
              <div className="menu flex f-column j-spaceBetween a-center">
                <img src={mucrim}></img>
                <h4>Beans</h4>
              </div>
            </a>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <a href="#">
              <div className="menu flex f-column j-spaceBetween a-center">
                <img src={mucrim}></img>
                <h4>Sauces</h4>
              </div>
            </a>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <a href="#">
              <div className="menu flex f-column j-spaceBetween a-center">
                <img src={mucrim}></img>
                <h4>Ricepaper</h4>
              </div>
            </a>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <a href="#">
              <div className="menu flex f-column j-spaceBetween a-center">
                <img src={mucrim}></img>
                <h4>Dried</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
