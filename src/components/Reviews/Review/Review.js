import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Review.scss";

export default function Review({ mess, avata, name }) {
  return (
    <div className="review">
      <p className="review__mess">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          color="white"
          style={{ fontSize: "30px", marginRight: "10px" }}
        />
        {mess}
      </p>
      <div className="reviewer-info">
        <div className="reviewer-info__left">
          <img src={avata} alt="" />
        </div>
        <div className="reviewer-info__right">
          <h3>{name}</h3>
          <p>Client</p>
        </div>
      </div>
    </div>
  );
}
