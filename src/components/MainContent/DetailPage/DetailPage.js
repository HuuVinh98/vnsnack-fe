import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import MainProduct from "./MainProduct/MainProduct";
import Item from "../../Popular/Item/Item";
import "./DetailPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiHttp from "../../../Store/Variable";
export default function DetailPage() {
  //------declare variable---------
  const { id } = useParams(); //selected product id
  const [product, setProduct] = useState({}); // slected product
  const [related, setRelated] = useState([]); // related product
  let [categoryId, setCategoryId] = useState(0);

  //--------functions--------
  useEffect(() => {
    fetch(`${apiHttp}product/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product.data);
        if (Object.keys(product.data).length !== 0) {
          setCategoryId(product.data.categories[0].id);
        }
      });
  }, [id]); // get product from api by id and get category id of this product to get related product

  useEffect(() => {
    fetch(`${apiHttp}product?sort=new&categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((related) => setRelated(related.data));
  }, [categoryId]); //get related product via category id

  return (
    <div className="detail-page">
      <div class="product-path">
        <div class="container">
          <a href="/">
            <span>Home</span>
            <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
          </a>
          <a href="/allproducts">
            <span>Products</span>
            <FontAwesomeIcon icon={faAngleRight} color="#00a149" />
          </a>
          <a href="#">
            <span>{product.name}</span>
          </a>
        </div>
      </div>
      <div class="product-detail">
        <div class="container">
          <MainProduct props={product}></MainProduct>

          <div class="related-products">
            <div class="title">
              <h2>Related Products</h2>
              <p>There are many similar products for you to choose</p>
            </div>
            <div class="owl-carousel">
              {
                <OwlCarousel
                  items={5}
                  className="owl-theme"
                  responsive={{
                    0: {
                      items: 1,
                    },
                    576: {
                      items: 2,
                    },
                    768: {
                      items: 3,
                    },
                    992: {
                      items: 4,
                    },
                    1140: {
                      items: 5,
                    },
                  }}
                  loop
                  nav
                  margin={8}
                  autoPlay={true}
                  autoplayTimeout={2000}
                >
                  {related.map((val) => {
                    return <Item props={val} />;
                  })}
                </OwlCarousel>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
