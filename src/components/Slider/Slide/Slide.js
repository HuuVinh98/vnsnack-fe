import "./Slide.scss";

export default function Slide({ text, img }) {
  return (
    <div className="slide container flex">
      <div class="slide__text">
        <p>Welcome to VN Snack</p>
        <h1>{text}</h1>
        <button>
          <a href="#">Order Now!</a>
        </button>
      </div>
      <div className="slide__image">
        <img className="img" src={img} />
      </div>
    </div>
  );
}
