import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import mucrim from "../../../images/mucrim.png";
import MainProduct from "./MainProduct/MainProduct";
import Item from "../../Popular/Item/Item";
import "./DetailPage.scss";
import { useStore } from "../../../Store/hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function DetailPage() {
  const [state, dispatch] = useStore();
  console.log("day la state", state);
  console.log("day la id", state.selectedProduct);
  //
  //get API
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log("id nè", id);
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = `http://api.vnsnack.com/product/${id}`;
      console.log("quan que:", id);
      const response = await fetch(requestUrl);

      console.log("day la response", response);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      console.log("xyz", responseJSON);

      setProduct(responseJSON);
      console.log("day la product:", product);
    }
    fetchProducts();
  }, [id]);

  return (
    <div className="detail-page">
      <div class="product-path">
        <div class="container">
          <a href="#">
            <span>Home</span>
            <FontAwesomeIcon icon={faAngleRight} color="blue" />
          </a>
          <a href="#">
            <span>Products</span>
            <FontAwesomeIcon icon={faAngleRight} color="blue" />
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
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
            {/* <div class="owl-carousel">
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
                <Item props={product}></Item>
              </OwlCarousel>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
