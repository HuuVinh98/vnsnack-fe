import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AllProducts.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import mucrim from "../../../images/mucrim.png";
import { useEffect, useState } from "react";
import Item from "../../Popular/Item/Item";
export default function AllProducts() {
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState([]);
  const pages = [1, 2, 3, 4, 5];
  //get API
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://api.vnsnack.com/product?take=2&page=${pageNumber}&sort=new`;
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      setProducts(responseJSON);
    }
    fetchProducts();
  }, [pageNumber]);
  // const numOfProductInPage = 2;
  // const numOfPages = Math.floor(products.length / numOfProductInPage);
  // const pages = [];
  // for (let i = 0; i < numOfPages; i++) {
  //   pages.push(i + 1);
  // }
  // console.log(products.length);
  // console.log(numOfPages);

  // function
  const handleClickAngleLeft = () => {
    if (pageNumber) {
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
            {/* <span
              data-id={1}
              onClick={(e) => {
                handleSetPageNumber(
                  e.target.attributes.getNamedItem("data-id").value
                );
              }}
            >
              1
            </span>
            <span
              data-id={2}
              onClick={(e) => {
                handleSetPageNumber(
                  e.target.attributes.getNamedItem("data-id").value
                );
              }}
            >
              2
            </span>
            <span
              data-id={3}
              onClick={(e) => {
                handleSetPageNumber(
                  e.target.attributes.getNamedItem("data-id").value
                );
              }}
            >
              3
            </span>
            <span
              data-id={4}
              onClick={(e) => {
                handleSetPageNumber(
                  e.target.attributes.getNamedItem("data-id").value
                );
              }}
            >
              4
            </span>
            <span
              data-id={5}
              onClick={(e) => {
                handleSetPageNumber(
                  e.target.attributes.getNamedItem("data-id").value
                );
              }}
            >
              5
            </span> */}
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
