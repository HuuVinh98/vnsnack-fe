import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollTop.scss";
import traidua from "../../../images/traidua.png";
function ScrollTop() {
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div class="turn-top-button" onClick={toTop}>
      <a href="#">
        <FontAwesomeIcon icon={faAngleDoubleUp} color="#00a149" />
      </a>
    </div>
  );
}
export default ScrollTop;
