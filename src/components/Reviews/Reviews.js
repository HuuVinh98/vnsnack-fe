import "./Reviews.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Review from "./Review/Review";
import vinh from "../../images/cus3.png";
import nghia from "../../images/cus2.png";
import trung from "../../images/cus1.png";

export default function Reviews() {
  return (
    <section class="reviews">
      <div class="container">
        <h2>Customer Reviews</h2>
        <div class="owl-carousel owl-loaded owl-theme">
          <OwlCarousel
            items={1}
            className="owl-theme"
            responsiveClass
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
            }}
            loop
            nav
            margin={8}
            autoPlay={true}
            autoplayTimeout={2000}
          >
            <Review
              mess="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam aut excepturi! Libero, praesentium veniam. Reprehenderit in facere repellendus, aperiam quia, ullam cupiditate doloribus, totam temporibus aut praesentium exercitationem eos."
              name="Nguyen Huu Vinh"
              avata={vinh}
            ></Review>
            <Review
              mess="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam aut excepturi! Libero, praesentium veniam. Reprehenderit in facere repellendus, aperiam quia, ullam cupiditate doloribus, totam temporibus aut praesentium exercitationem eos."
              name="Pham Trong Nghia"
              avata={nghia}
            ></Review>
            <Review
              mess="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam aut excepturi! Libero, praesentium veniam. Reprehenderit in facere repellendus, aperiam quia, ullam cupiditate doloribus, totam temporibus aut praesentium exercitationem eos."
              name="Le Huu Trung"
              avata={trung}
            ></Review>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
