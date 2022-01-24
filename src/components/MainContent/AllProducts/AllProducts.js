import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AllProducts.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Item from "../../Popular/Item/Item";
export default function AllallProducts() {
  const [pageNumber, setPageNumber] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("new");
  const [categoryId, setCategoryId] = useState(1);
  const handleFilter = (value) => {
    setFilter(value);
  };
  const pages = [1, 2, 3, 4, 5];
  //get API
  useEffect(() => {
    async function fetchallProducts() {
      const requestUrl = `http://api.vnsnack.com/product?take=10&page=${pageNumber}&sort=${filter}&categoryId=${categoryId}`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();

      setAllProducts(responseJSON);
    }
    fetchallProducts();
  }, [pageNumber, filter, categoryId]);

  const handleClickAngleLeft = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const handleClickAngleRight = () => {
    if (pageNumber < 5) {
      setPageNumber(pageNumber + 1);
    }
  };
  const handleSetPageNumber = (e) => {
    setPageNumber(e);
  };
  const handleSetCategory = (e) => {
    setCategoryId(e);
  };
  return (
    <div className="all-products">
      <div className="container flex f-column a-center">
        <div className="all-products__header">
          <h4>All allProducts</h4>
          <div className="category flex j-spaceBeweent">
            <div className="category__left flex j-spaceBetween">
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
            <div className="category__right">
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
        <div className="all-products__body">
          <div className="row">
            {allProducts.map((product, idx) => {
              return (
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <Item props={product}></Item>
                </div>
              );
            })}
          </div>
        </div>
        <div className="all-products__footer flex a-center">
          <FontAwesomeIcon
            onClick={() => {
              handleClickAngleLeft();
            }}
            icon={faAngleLeft}
            style={{ color: "#00a149", fontSize: "20px", fontWeight: "normal" }}
          />
          <div className="page-number flex">
            {pages.map((page) => {
              return (
                <span
                  key={page}
                  style={
                    page === pageNumber
                      ? { color: "white", backgroundColor: "red" }
                      : {}
                  }
                  onClick={() => {
                    handleSetPageNumber(page);
                  }}
                >
                  {page}
                </span>
              );
            })}
          </div>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: "#00a149", fontSize: "20px", fontWeight: "normal" }}
            onClick={() => {
              handleClickAngleRight();
            }}
          />
        </div>
      </div>
    </div>
  );
}
