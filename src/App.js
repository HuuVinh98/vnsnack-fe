import { useEffect, useState } from "react";
import "./App.css";
import "./reset.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ModalBoxs/ScrollTop/ScrollTop";
import Account from "./components/ModalBoxs/Account/Account";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ColumnMenu from "./components/ModalBoxs/ColumnMenu/ColumnMenu";
function App() {
  //control scroll top icon
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBtn]);
  //get API
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const requestUrl = "http://api.vnsnack.com/product";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      //const { data } = responseJSON;
      setProducts(responseJSON);
    }
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        {showBtn && <ScrollTop />}
        {/* <CartBox /> */}
        {/* <Account /> */}
        <ColumnMenu />
        <Header />
        <MainContent abc={products} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
