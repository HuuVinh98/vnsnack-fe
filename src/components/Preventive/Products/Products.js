import Product from "./Product/Product";
import './Products.scss';
import rainbow from "./rainbow.png";
import Cichlids from "./Cichlids.png";
import Labyrinth from "./Labyrinth.png";

function Products()
{
    return (
        <section className="products">
            <div className="container">
                <div className="products-left">
                    <Product
                        url={rainbow}
                        name="Rainbowfish"
                        price="$29.00"
                    ></Product>
                </div>
                <div className="products-right">
                    <Product
                        url={Cichlids}
                        name="Rainbowfish"
                        price="$29.00"
                    ></Product>
                    <Product
                        url={Labyrinth}
                        name="Rainbowfish"
                        price="$29.00"
                    ></Product>
                </div>
            </div>
        </section>
    )
}
export default Products;