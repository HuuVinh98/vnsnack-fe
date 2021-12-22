import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Video.scss";

export default function Video() {
  return (
    <section class="videos">
      <div class="container">
        <h2>Video Review</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          fugiat excepturi nobis reprehenderit asperiores, dolor ducimus qui
          facilis et aspernatur quisquam!
        </p>
        <div class="album flex">
          <div class="album__left">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/kor6mPFmGBU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="descr flex f-column">
              <h3>How are you? I'm fine, thank you.</h3>
              <div className="tag flex j-start">
                <span>
                  30 min
                  <FontAwesomeIcon
                    icon={faClock}
                    color="white"
                    className="fa-icon"
                  ></FontAwesomeIcon>
                </span>
                <span>
                  5 steps
                  <FontAwesomeIcon
                    icon={faCheck}
                    color="white"
                    className="fa-icon"
                  ></FontAwesomeIcon>
                </span>
              </div>
            </div>
          </div>
          <div className="album__right flex f-column a-center j-spaceBetween">
            <div className="iframe flex">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/rYb_ygsTDfY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="descr flex f-column">
                <h3>How are you? I'm fine, thank you.</h3>
                <div className="tag flex j-start">
                  <span>
                    30 min
                    <FontAwesomeIcon
                      icon={faClock}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                  <span>
                    5 steps
                    <FontAwesomeIcon
                      icon={faCheck}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </div>
            <div className="iframe flex">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/rYb_ygsTDfY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="descr flex f-column">
                <h3>How are you? I'm fine, thank you.</h3>
                <div className="tag flex j-start">
                  <span>
                    30 min
                    <FontAwesomeIcon
                      icon={faClock}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                  <span>
                    5 steps
                    <FontAwesomeIcon
                      icon={faCheck}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </div>

            <div className="iframe flex">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/rYb_ygsTDfY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="descr flex f-column">
                <h3>How are you? I'm fine, thank you.</h3>
                <div className="tag flex j-start">
                  <span>
                    30 min
                    <FontAwesomeIcon
                      icon={faClock}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                  <span>
                    5 steps
                    <FontAwesomeIcon
                      icon={faCheck}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </div>
            <div className="iframe flex">
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/rYb_ygsTDfY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div className="descr flex f-column">
                <h3>How are you? I'm fine, thank you.</h3>
                <div className="tag flex j-start">
                  <span>
                    30 min
                    <FontAwesomeIcon
                      icon={faClock}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                  <span>
                    5 steps
                    <FontAwesomeIcon
                      icon={faCheck}
                      color="white"
                      className="fa-icon"
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
