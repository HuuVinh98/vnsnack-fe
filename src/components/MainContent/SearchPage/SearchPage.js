import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../../Popular/Item/Item";
import mucrim from "../../../images/mucrim.png";
import "./SearchPage.scss";
import { useState, useEffect } from "react";
export default function SearchPage() {
  //get API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://api.vnsnack.com/product?sort=new`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      setProducts(responseJSON);
    }
    fetchProducts();
  }, []);

  let [search, setSearch] = useState([]);
  let handleKeyUp = (e) => {
    let press = e;
    if (e) {
      let searchList = products.filter((val) => {
        return val.name.toLocaleLowerCase().includes(press.toLocaleLowerCase());
      });
      setSearch(searchList);
      console.log(search);
    }
  };
  return (
    <div className="search-page flex f-column">
      <div className="search-page__input">
        <div className="container flex">
          <form action="" className="flex j-spaceBetween">
            <input
              type="text"
              placeholder="Search"
              id="search-input"
              onChange={(e) => {
                handleKeyUp(e.target.value);
              }}
            />
            <a href="#">
              <FontAwesomeIcon icon={faSearch} color="black" />
            </a>
          </form>
        </div>
      </div>
      {/* ----------------------add search item------------------ */}
      <div className="search-page__list">
        <div className="row">
          {search.map((value, idx) => {
            return (
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <Item
                  key={idx}
                  url={
                    value.photos.filter((val) => val.isThumbnail === true)[0]
                      .url
                  }
                  name={value.name}
                  price={value.price}
                ></Item>
              </div>
            );
          })}
        </div>
      </div>
      {/* ----------------------add search item------------------ */}
    </div>
  );
}
