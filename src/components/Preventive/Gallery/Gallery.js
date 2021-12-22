import "./Gallery.scss";
import gallery1 from "../../images/gallery1.jpg";
import gallery2 from "../../images/gallery2.jpg";
import gallery3 from "../../images/gallery3.jpg";
import gallery4 from "../../images/gallery4.jpg";
import gallery5 from "../../images/gallery5.jpg";
import gallery6 from "../../images/gallery6.jpg";

export default function Gallery()
{
    return (
        <section class="gallery">
            <div class="container">
                <h2>Our Gallery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat excepturi nobis reprehenderit asperiores, dolor ducimus qui facilis et aspernatur quisquam!</p>
                <div class="images">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class="img">
                                <img src={gallery1} alt=""/>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class="img">
                                <img src={gallery2} alt=""/>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class="img">
                                <img src={gallery3} alt=""/>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class="img">
                                <img src={gallery4} alt=""/>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class="img">
                                <img src={gallery5} alt=""/>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6">
                            <div class="img">
                                <img src={gallery6} alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}