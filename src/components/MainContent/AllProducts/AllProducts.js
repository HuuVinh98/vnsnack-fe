import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AllProducts.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Item from "../../Popular/Item/Item";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import http from "../../../Store/Variable";
export default function AllallProducts() {
  const [pageNumber, setPageNumber] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState("new");
  const [categoryId, setCategoryId] = useState(1);
  const handleFilter = (value) => {
    setFilter(value);
  };

  const pages = [1, 2, 3, 4, 5]; // số trang

  const [categoryIdList, setCategoryIdList] = useState([]); //danh sách category ID
  //lấy danh sách category ID
  useEffect(() => {
    fetch(`${http}category`)
      .then((res) => res.json())
      .then((categoryIdList) => setCategoryIdList(categoryIdList));
  }, []);
  //lấy sản phẩm
  useEffect(() => {
    async function fetchallProducts() {
      const requestUrl = `${http}product?take=10&page=${pageNumber}&sort=${filter}&categoryId=${categoryId}`;
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
  const handleSetCategory = (value) => {
    setCategoryId(value);
  };
  return (
    <div className="all-products">
      <div className="container flex f-column a-center">
        <div className="all-products__header">
          <h4>All allProducts</h4>
          <div className="category flex j-spaceBeween">
            <div className="category__left flex j-spaceBetween">
              {categoryIdList && (
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
                  {categoryIdList.map((val) => {
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
