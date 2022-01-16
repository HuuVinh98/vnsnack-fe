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
export default function DetailPage() {
  const [state, dispatch] = useStore();
  console.log(state);
  //const a = state;
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
            <span>{state.selectedProduct.name}</span>
          </a>
        </div>
      </div>
      <div class="product-detail">
        <div class="container">
          <MainProduct props={state.selectedProduct}></MainProduct>

          <div class="related-products">
            <div class="title">
              <h2>Related Products</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
            <div class="owl-carousel">
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
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
                <Item
                  name="Rice paper mix"
                  desc="How are you? I'm fine, thank you. And you?"
                  url={mucrim}
                ></Item>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
