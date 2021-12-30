import { useContext, useEffect, useState } from "react";
import "./App.css";
import "./reset.scss";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ModalBoxs/ScrollTop/ScrollTop";
import CartBox from "./components/ModalBoxs/CartBox/CartBox";
import Account from "./components/ModalBoxs/Account/Account";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ColumnMenu from "./components/ModalBoxs/ColumnMenu/ColumnMenu";
import Context from "./Store/Context";

function App() {
  //context
  const state = useContext(Context);
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

  return (
    <Router>
      <div className="App">
        {showBtn && <ScrollTop />}
        <CartBox />
        <ColumnMenu />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
