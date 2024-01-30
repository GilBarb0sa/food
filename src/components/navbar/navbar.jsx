import "./navbar.css"; 
import logo from "../../assents/logo.png";
import bag from "../../assents/bag.png"
import Cart from "../cart/cart";
import {Link} from "react-router-dom";

function Navbar(props){

  function openSidebar(){ //função para surgir a barra lateral
    const event = new CustomEvent('openSidebar');
    window.dispatchEvent(event);
  }

  return <div className="navbar">
    <Link to="/">
        <img src={logo} className="logotipo" alt="Logotipo" />
    </Link>
    {
    props.showMenu &&
        <div className="menu">
          <Link to="/historico">Histórico</Link>
          <button onClick={openSidebar} className="btn btn-red">
            <img src={bag} className="icon"/>
            Sacola
          </button>
        </div>
    }


    <Cart/>
  </div>
} 

export default Navbar;