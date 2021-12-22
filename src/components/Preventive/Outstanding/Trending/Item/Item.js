import './Item.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export default function Item({url,name,price})
{
    return (
        <div class="item">
          <img src={url} alt=""/>
            <div class="text">
                <h2>{name}</h2>
                <h3>{price}</h3>
            </div>
            <button>
                <a href="#">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    ADD TO CART
                </a>
            </button>              
        </div> 
    )
}