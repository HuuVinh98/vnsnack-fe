import "./CheckoutItem.scss";

export default function CheckoutItem({ url, name, price, quantity }) {
  return (
    <div className="checkout-item flex">
      <div className="checkout-item__image">
        <img src={url} alt="" />
      </div>
      <div className="checkout-item__info flex j-spaceBetween">
        <div className="infomation flex f-column">
          <p>{name}</p>
          <span>x{quantity}</span>
        </div>
        <span>
          $
          {Number(
            (
              quantity *
              Number(price.split("").splice(1, price.length).join(""))
            ).toFixed(2)
          )}
        </span>
      </div>
    </div>
  );
}
