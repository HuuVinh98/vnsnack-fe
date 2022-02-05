import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AllProducts.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Item from "../../Popular/Item/Item";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import apiHttp from "../../../Store/Variable";
export default function AllallProducts() {
  //-------declare variable-------
  const productsOnPage = 5; // quantity of product in one page
  const [pageNumber, setPageNumber] = useState(1); //page number to get the product
  const [allProducts, setAllProducts] = useState([]); //All products have been returned
  const [sort, setSort] = useState("new"); //
  const [categoryId, setCategoryId] = useState(1); //the id of selected category
  const [categories, setCategories] = useState([]); //danh sách category ID
  const [pages, setPages] = useState([1, 2, 3, 4, 5]); //,
  const [a, setA] = useState([]);
  //---------functions--------
  const handleSort = (value) => {
    setSort(value);
  }; // reset sort

  useEffect(() => {
    fetch(`${apiHttp}category`)
      .then((res) => res.json())
      .then((categories) => setCategories(categories.data));
  }, []); //get all of categories

  useEffect(() => {
    fetch(
      `${apiHttp}product?take=${productsOnPage}&page=${pageNumber}&sort=${sort}&categoryId=${categoryId}`
    )
      .then((res) => res.json())
      .then((allProducts) => {
        setAllProducts(allProducts.data);
      });
  }, [pageNumber, sort, categoryId]); // get proucts from api

  // useEffect(() => {
  //   fetch(`http://54.179.249.114:8000/product?sort=new&categoryId=1`)
  //     .then((res) => res.json())
  //     .then((a) => {
  //       // let temp = [];
  //       // for (let i = 1; (i = Math.ceil(a.data.length / productsOnPage)); i++) {
  //       //   temp.push(i);
  //       // }
  //       // setPages(temp);
  //       console.log(a);
  //     });
  // }, [sort, categoryId]);

  const handleClickAngleLeft = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }; //go to previous page
  const handleClickAngleRight = () => {
    if (pageNumber < 5) {
      setPageNumber(pageNumber + 1);
    }
  }; //go to next page
  const handleSetPageNumber = (e) => {
    setPageNumber(e);
  }; //choose page number
  const handleSetCategory = (value) => {
    setCategoryId(value);
  }; //choose category

  return (
    <div className="all-products">
      <div className="container flex f-column a-center">
        <div className="all-products__header">
          <h4>All allProducts</h4>
          <div className="category flex j-spaceBeween">
            <div className="category__left flex j-spaceBetween">
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
                          handleSetPageNumber(1);
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
              Sort:
              <select
                name="Sort"
                id="sort"
                onChange={(e) => handleSort(e.target.value)}
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
            {}
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
