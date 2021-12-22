import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import Navigation from "./Navigation/Navigation";
import "./Header.scss";
import NavResponsive from "./Navigation/MenuResponsive";

function Header() {
  return (
    <header>
      <HeaderTop
        phone="+012 345 6789"
        location="California"
        linkFacebook="#"
        linIns="#"
        linkIn="#"
        linkYoutube="#"
        linkTwitter="#"
      ></HeaderTop>
      <HeaderBottom></HeaderBottom>
    </header>
  );
}

export default Header;
