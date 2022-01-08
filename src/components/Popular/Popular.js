import "./Popular.scss";
import Item from "./Item/Item";
import { useContext, useEffect, useState } from "react";

export default function Popular() {
  //get API
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("new");
  const handleFilter = (value) => {
    setFilter(value);
    console.log(filter);
  };
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://api.vnsnack.com/product?filter=${filter}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      setProducts(responseJSON);
    }
    fetchProducts();
  }, [filter]);

  return (
    <section className="popular">
      <div className="container">
        <div className="popular-title">
          <div className="popular-title__top">
            <h2>Popular dish</h2>
          </div>
          <div className="popular-title__bottom flex j-spaceBeweent">
            <div className="title__left flex j-spaceBetween">
              <button>
                <a href="">Seafood</a>
              </button>
              <button>
                <a href="">Peanut</a>
              </button>
              <button>
                <a href="">Ricepaper</a>
              </button>
              <button>
                <a href="">Dried</a>
              </button>
            </div>
            <div className="title__right">
              Filter:
              <select
                name="Filter"
                id="filter"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="new">New</option>
                <option value="hot">Hot</option>
                <option value="expensive">Expensive</option>
              </select>
            </div>
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
        <button className="more-products">
          <a href="/allproducts">More</a>
        </button>
      </div>
    </section>
  );
}
