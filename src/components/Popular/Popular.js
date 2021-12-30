import "./Popular.scss";
import Item from "./Item/Item";
import { useContext, useEffect, useState } from "react";

export default function Popular() {
  //get API
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("new");
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://api.vnsnack.com/product?sort=${sort}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      setProducts(responseJSON);
    }
    fetchProducts();
  }, [sort]);

  return (
    <section className="popular">
      <div className="container">
        <div className="popular-title">
          <div className="popular-title__top">
            <h2>Popular dish</h2>
          </div>
          <div className="popular-title__bottom">
            <button
              onClick={() => {
                setSort("new");
              }}
            >
              <a href="">New</a>
            </button>
            <button
              onClick={() => {
                setSort("hot");
              }}
            >
              <a href="">Hot</a>
            </button>
            <button
              onClick={() => {
                setSort("expensive");
              }}
            >
              <a href="">Expensive</a>
            </button>
            <button>
              <a href="">Dried</a>
            </button>
          </div>
        </div>

        <div className="popular-products">
          <div className="row">
            {products.map((product, idx) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <Item
                    key={idx}
                    url={product.photos[0].url}
                    name={product.name}
                    price={product.price}
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
      </div>
    </section>
  );
}
