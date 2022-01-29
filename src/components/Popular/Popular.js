import "./Popular.scss";
import Item from "./Item/Item";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiHttp from "../../Store/Variable";
export default function Popular() {
  // ----------declare variable-------
  const [products, setProducts] = useState([]); // All products have been returned
  const [categoryId, setCategoryId] = useState(1); // id of selected category
  const [categories, setCategories] = useState([]); //all of categories

  //-------------function-------------
  useEffect(() => {
    fetch(`${apiHttp}category`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories.data));
  }, []); //get all category from api

  const handleSetCategory = (value) => {
    setCategoryId(value);
  }; //reset category id  when the customer clicks on another category

  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `${apiHttp}product?take=8&sort=hot&categoryId=${categoryId}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setProducts(responseJSON.data);
    }
    fetchProducts();
  }, [categoryId]); //get products by category id

  return (
    <section className="popular">
      <div className="container">
        <div className="popular-title">
          <div className="popular-title__top">
            <h2>Popular dish</h2>
          </div>
          <div className="popular-title__bottom flex j-spaceBeweent">
            {categories && (
              <OwlCarousel
                items={4}
                responsive={{
                  0: { items: 2 },
                  400: { items: 3 },
                  992: { items: 4 },
                }}
                className="owl-theme"
                loop
                nav
                margin={8}
                autoPlay={true}
                autoplayTimeout={2000}
              >
                {categories.map((val) => {
                  return (
                    <button
                      className="change-id"
                      style={
                        categoryId === val.id
                          ? { color: "white", backgroundColor: "red" }
                          : {}
                      }
                      onClick={() => {
                        handleSetCategory(val.id);
                      }}
                    >
                      {val.name}
                    </button>
                  );
                })}
              </OwlCarousel>
            )}
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
          </div>
        </div>
        <button className="more-products">
          <Link to={"/allproducts"}>More</Link>
        </button>
      </div>
    </section>
  );
}
