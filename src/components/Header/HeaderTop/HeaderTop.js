import "./HeaderTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function HeaderTop({
  phone,
  location,
  linkFacebook,
  linIns,
  linkYoutube,
  linkTwitter,
  linkIn,
}) {
  return (
    <div className="header-top ">
      <div className="container">
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faMobileAlt}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <p>CALL US: {phone}</p>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              color="white"
              style={{ marginRight: "10px" }}
            />
            <p>{location}</p>
          </li>
        </ul>
        <ul>
          <li>
            <a href={linkFacebook}>
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                style={{ marginRight: "10px" }}
                className="fa-icon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href={linIns}>
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                style={{ marginRight: "10px" }}
                className="fa-icon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href={linkYoutube}>
              <FontAwesomeIcon
                icon={faYoutube}
                color="white"
                style={{ marginRight: "10px" }}
                className="fa-icon"
              ></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href={linkTwitter}>
              <FontAwesomeIcon
                icon={faTwitter}
                color="white"
                style={{ marginRight: "10px" }}
                className="fa-icon"
              ></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
