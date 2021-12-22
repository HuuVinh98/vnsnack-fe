import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slider.scss";
import Slide from "./Slide/Slide";
import mucrim from "../../images/mucrim.png";
function Slider() {
  return (
    <div className="slider">
      <OwlCarousel
        items={1}
        className="owl-theme"
        loop
        nav
        margin={8}
        autoPlay={true}
        autoplayTimeout={2000}
      >
        <Slide
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img={mucrim}
        />
        <Slide
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img={mucrim}
        />
        <Slide
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          img={mucrim}
        />
        {/* <div className="slide">
          <div class="slide__text">
            <div class="container">
              <p>Welcome to VN Snack</p>
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
              <button>
                <a href="#">Order Now!</a>
              </button>
            </div>
          </div>
          <img className="img" src={slide1} />
        </div>
        <div className="slide">
          <div class="slide__text">
            <div class="container">
              <p>Welcome to VN Snack</p>
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
              <button>
                <a href="#">Order Now!</a>
              </button>
            </div>
          </div>
          <img className="img" src={slide2} />
        </div>
        <div className="slide">
          <div class="slide__text">
            <div class="container">
              <p>Welcome to VN Snack</p>
              <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
              <button>
                <a href="#">Order Now!</a>
              </button>
            </div>
          </div>
          <img className="img" src={slide3} />
        </div> */}
      </OwlCarousel>
    </div>
  );
}

export default Slider;
