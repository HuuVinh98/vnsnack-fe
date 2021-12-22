import './Trending.scss';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Item from './Item/Item';
import exfish from "./exfish.png"
function Trending()
{
    return (
        <section class="trending">
            <div class="container">
                <h2 class="trending-title">Trending Products</h2>
                <div class="owl-carouse">
                    <OwlCarousel items={3}  
                        className="owl-theme"  
                        responsiveClass
                        responsive={
                        {
                            0:{
                                items:1,
                            },
                            576:{
                                items:2,
                            },
                            768:{
                                items:3,
                            }
                        }}
                        loop  
                        nav  
                        margin={8} 
                        autoPlay={true}
                        autoplayTimeout={2000}
                    >
                        <Item
                            url={exfish}
                            name="Vulva Fish"
                            price="$30.00"
                        ></Item>
                            <Item
                            url={exfish}
                            name="Vulva Fish"
                            price="$30.00"
                        ></Item>
                            <Item
                            url={exfish}
                            name="Vulva Fish"
                            price="$30.00"
                        ></Item>
                            <Item
                            url={exfish}
                            name="Vulva Fish"
                            price="$30.00"
                        ></Item>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}
export default Trending;