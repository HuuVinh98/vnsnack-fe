import "./MainProduct.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import defaultImage from "../../../../images/default-image.png";
export default function MainProduct({ props }) {
  return (
    <div class="main-product">
      <div class="main-product__left">
        {props.photos == undefined || props.photos.length == 0 ? (
          <OwlCarousel
            items={1}
            className="owl-theme"
            responsiveClass
            loop
            nav
            margin={8}
            autoPlay={true}
            autoplayTimeout={2000}
          >
            <img src={defaultImage} />
          </OwlCarousel>
        ) : (
          <OwlCarousel
            items={1}
            className="owl-theme"
            responsiveClass
            loop
            nav
            margin={8}
            autoPlay={true}
            autoplayTimeout={2000}
          >
            {props.photos.map((val, idx) => {
              return (
                <div>
                  <img src={val.url ? val.url : defaultImage} alt={val.name} />
                </div>
              );
            })}
          </OwlCarousel>
        )}
      </div>
      <div class="main-product__right">
        <div class="right-top">
          <h2>{props.name}</h2>
          <h3>${props.price}</h3>
        </div>
        <div class="right-bot">
          <p>{props.description}</p>

          <div class="product-quantity">
            <div class="quantity flex">
              <span>
                <FontAwesomeIcon icon={faMinus} />
              </span>
              <span>1</span>
              <span>
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
            <button>Add To Cart</button>
            <div class="btn-wishlist">
              <FontAwesomeIcon icon={faHeart} color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
