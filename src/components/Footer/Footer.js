import "./Footer.scss";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottoom/FooterBottom";
export default function Footer()
{
    return (
        <footer>
        <div class="container">
           <FooterTop />
        </div>
        <FooterBottom />
    </footer>
    )
}