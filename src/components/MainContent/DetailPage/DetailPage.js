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

export default function DetailPage() {
  const { id } = useParams(); //id sản phẩm được chọn
  const [product, setProduct] = useState({}); // sản phẩm được chọn
  const [related, setRelated] = useState([]); // các sản phẩm liên quan
  const http = "http://54.179.249.114:8000/";
  // lấy api sản phẩm được chọn
  useEffect(() => {
    fetch(`${http}product/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [id]);

  // lấy category id của sản phẩm được chọn để tìm ra các sản phẩm liên quan
  let categoryId;
  if (Object.keys(product).length !== 0) {
    categoryId = product.categories[0].id;
  } else {
    categoryId = 0;
  }
  // lấy ra các sản phẩm liên quan dựa trên category id
  useEffect(() => {
    fetch(`${http}product?sort=new&categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((related) => setRelated(related));
  }, [categoryId]);

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
