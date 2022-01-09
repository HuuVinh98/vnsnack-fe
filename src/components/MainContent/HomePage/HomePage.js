import Slider from "../../Slider/Slider";

import Promotion from "../../Promotion/Promotion";
import Popular from "../../Popular/Popular";
import Reviews from "../../Reviews/Reviews";
import Menus from "../../Menus/Menus";
import Video from "../../Video/Video";
export default function HomePage() {
  return (
    <div className="home-page">
      <Slider />
      <Menus />
      <Promotion />
      <Popular />
      <Reviews />
      <Video />
    </div>
  );
}
