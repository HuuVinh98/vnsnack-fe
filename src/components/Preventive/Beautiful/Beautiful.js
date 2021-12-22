import "./Beautiful.scss";
import aquarium from "../../images/aquarium.jpg"
export default function Beautiful()
{
    return (
        <section class="beautiful">
            <div class="beautiful-products container">
                <div class="beautiful-products__text">
                    <h2>BEAUTIFUL AQUARIUM</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque aut beatae nesciunt repellendus, dicta neque ex doloribus distinctio ab debitis eum natus quos non. Eaque aperiam sit maiores voluptatum nemo?</p>
                    <button><a href="#">BUY NOW!</a></button>
                </div>
                <div class="beautiful-products__picture">
                    <img src={aquarium} alt="" />
                </div>
            </div>
        </section>
    )
}