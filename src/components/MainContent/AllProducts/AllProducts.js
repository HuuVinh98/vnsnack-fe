import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AllProducts.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import mucrim from "../../../images/mucrim.png";
import { useEffect, useState } from "react";
import Item from "../../Popular/Item/Item";
export default function AllProducts() {
  //get API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://54.179.183.246:8000/category?filter=new`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      console.log(responseJSON);
      setProducts(responseJSON);
    }
    fetchProducts();
  }, []);

  return (
    <div className="all-products">
      <div className="container flex f-column a-center">
        <div className="all-products__header">
          <div>All Products</div>
        </div>
        <div className="all-products__body">
          <div className="row">
            {products.map((product, idx) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <Item
                    key={idx}
                    url={mucrim}
                    name={product.name}
                    price={idx + 2}
                    info=""
                  ></Item>
                </div>
              );
            })}
            {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <Item url={mucrim} name="muc rim" price="5" info=""></Item>
            </div> */}
          </div>
        </div>
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
