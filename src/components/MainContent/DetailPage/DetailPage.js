import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import mucrim from "../../../images/mucrim.png";
import MainProduct from "./MainProduct/MainProduct";
import Item from "../../Popular/Item/Item";
import "./DetailPage.scss";
export default function DetailPage() {
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
            <span>Rice paper mix</span>
          </a>
        </div>
      </div>
      <div class="product-detail">
        <div class="container">
          <MainProduct
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab fuga
          enim ipsam sed animi illum, officia dolorum ullam tenetur nihil
          voluptatibus aliquam ratione fugit vitae dignissimos veniam. Error,
          numquam? Ipsam!"
            name="Rice paper mix"
            price="$30.00"
            weight="100g"
            material="egg, ricepaper, mango,chilli,.."
            origin="Vietnam"
            mfg="2/12/2021"
            exp="2 months"
          ></MainProduct>

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
