import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchItem from "./SearchItem/SearchItem";
import Item from "../../Popular/Item/Item";
import "./SearchPage.scss";
import { useState, useEffect } from "react";
export default function SearchPage() {
  const [products, setProducts] = useState([]); // chứa tất cả sản phẩm
  // lấy tất cả sản phẩm về
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

  let [search, setSearch] = useState([]); // chứa các sản phẩm phù hợp với từ khoá

  //kiểm tra trùng khớp giữa từ khoá và tên sản phẩm
  let handleKeyUp = (e) => {
    let press = e;
    if (press !== "") {
      let searchList = products.filter((val) => {
        return val.name.toLocaleLowerCase().includes(press.toLocaleLowerCase());
      });
      setSearch(searchList);
    } else {
      setSearch([]);
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
                <Item props={value}></Item>
              </div>
            );
          })}
        </div>
      </div>
      {/* ----------------------add search item------------------ */}
    </div>
  );
}
