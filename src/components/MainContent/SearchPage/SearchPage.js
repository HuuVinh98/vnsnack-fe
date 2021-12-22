import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "../../Popular/Item/Item";
import mucrim from "../../../images/mucrim.png";
import "./SearchPage.scss";
export default function SearchPage() {
  return (
    <div className="search-page flex f-column">
      <div className="search-page__input">
        <div className="container flex">
          <form action="" className="flex j-spaceBetween">
            <input type="text" placeholder="Search" id="search-input" />
            <a href="#">
              <FontAwesomeIcon icon={faSearch} color="black" />
            </a>
          </form>
        </div>
      </div>
      {/* ----------------------add search item------------------ */}
      <div className="search-page__list">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <Item
              url={mucrim}
              name="Squid Married Satay"
              desc="How are you? I'm fine thank you. And you?"
              price="$30.00"
            ></Item>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <Item
              url={mucrim}
              name="Squid Married Satay"
              desc="How are you? I'm fine thank you. And you?"
              price="$30.00"
            ></Item>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <Item
              url={mucrim}
              name="Squid Married Satay"
              desc="How are you? I'm fine thank you. And you?"
              price="$30.00"
            ></Item>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <Item
              url={mucrim}
              name="Squid Married Satay"
              desc="How are you? I'm fine thank you. And you?"
              price="$30.00"
            ></Item>
          </div>
        </div>
      </div>
      {/* ----------------------add search item------------------ */}
    </div>
  );
}
