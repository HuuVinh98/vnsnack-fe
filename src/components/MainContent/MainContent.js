import HomePage from "./HomePage/HomePage";
import DetailPage from "./DetailPage/DetailPage";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Wishlist from "./Wishlist/Wishlist";
import Checkout from "./Checkout/Checkout";
import SearchPage from "./SearchPage/SearchPage";
import { Switch, Route } from "react-router-dom";
export default function MainContent({ abc }) {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage data={abc} />
      </Route>
      <Route path="/product/">
        <DetailPage />
      </Route>
      <Route path="/cart">
        <ShoppingCart />
      </Route>
      <Route path="/wishlist">
        <Wishlist />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
    </Switch>
  );
}
