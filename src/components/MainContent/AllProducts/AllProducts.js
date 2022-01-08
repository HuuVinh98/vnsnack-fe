import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AllProducts.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function AllProducts() {
  return (
    <div className="all-products">
      <div className="container flex f-column a-center">
        <div className="all-products__header">
          <div>All Products</div>
        </div>
        <div className="all-products__body"></div>
        <div className="all-products__footer flex a-center">
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ color: "#00a149", fontSize: "20px", fontWeight: "normal" }}
          />
          <div className="page-number flex">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
          </div>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "#00a149", fontSize: "20px", fontWeight: "normal" }}
          />
        </div>
      </div>
    </div>
  );
}
