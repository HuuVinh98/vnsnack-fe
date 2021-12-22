import "./Wishlist.scss";
import mucrim from "../../../images/mucrim.png";
import WishlistItem from "./WishlistItem/WishlistItem";
export default function Wishlist() {
  return (
    <div class="wishlist-page">
      <div class="container">
        <h1>Wishlist</h1>
        <div class="wishlist-content flex wr-wrap">
          <WishlistItem url={mucrim} name="Squid married satay"></WishlistItem>
        </div>
      </div>
    </div>
  );
}
