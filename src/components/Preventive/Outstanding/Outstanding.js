import "./Outstanding.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Item from "../Trending/Item/Item";
import exfish from "../../images/exfish.png";

export default function Outstanding() {
  return (
    <section className="outstanding">
      <div className="material container">
        <div className="material-title">
          <div className="material-title__left">
            <h2>Outstanding Materials</h2>
          </div>
          <div className="material-title__right">
            <button>
              <a href="">Material A</a>
            </button>
            <button>
              <a href="">Material B</a>
            </button>
            <button>
              <a href="">Material C</a>
            </button>
            <button>
              <a href="">All Materials</a>
            </button>
          </div>
        </div>
        <div className="owl-carousel">
          <OwlCarousel
            items={5}
            className="owl-theme"
            responsiveClass
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
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
            <Item url={exfish} name="Vulva Fish" price="$30.00"></Item>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
