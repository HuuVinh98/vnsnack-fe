import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './Product.scss';
function Product({url,name,price})
{
    return (
        <div className="product">
             <img src={url} alt={name}/>
             <div className="product__content">
                <h2 className="product-name">{name}</h2>
                <h3>From {price}</h3>        
             </div>
            <div className="product__access">
                <a href="#">
                    <FontAwesomeIcon icon={faArrowRight} color="white"/>
                </a>
            </div>              
        </div>
    )
}
export default Product