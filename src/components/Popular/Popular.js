import "./Popular.scss";
import Item from "./Item/Item";
import { useEffect, useState } from "react";

export default function Popular() {
  //get API
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(1);
  const handleSetCategory = (value) => {
    setCategoryId(value);
  };
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://api.vnsnack.com/product?take=8&sort=hot&categoryId=${categoryId}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      setProducts(responseJSON);
    }
    fetchProducts();
  }, [categoryId]);

  return (
    <section className="popular">
      <div className="container">
        <div className="popular-title">
          <div className="popular-title__top">
            <h2>Popular dish</h2>
          </div>
          <div className="popular-title__bottom flex j-spaceBeweent">
            <button
              style={
                categoryId === 1
                  ? { color: "white", backgroundColor: "red" }
                  : {}
              }
              onClick={() => {
                handleSetCategory(1);
              }}
            >
              Seafood
            </button>
            <button
              style={
                categoryId === 6
                  ? { color: "white", backgroundColor: "red" }
                  : {}
              }
              onClick={() => {
                handleSetCategory(6);
              }}
            >
              Peanut
            </button>
            <button
              style={
                categoryId === 7
                  ? { color: "white", backgroundColor: "red" }
                  : {}
              }
              onClick={() => {
                handleSetCategory(7);
              }}
            >
              Ricepaper
            </button>
            <button
              data-id={8}
              style={
                categoryId === 8
                  ? { color: "white", backgroundColor: "red" }
                  : {}
              }
              onClick={() => {
                handleSetCategory(8);
              }}
            >
              Dried
            </button>
          </div>
        </div>

        <div className="popular-products">
          <div className="row">
            {products.map((product, idx) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <Item key={idx} props={product}></Item>
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
