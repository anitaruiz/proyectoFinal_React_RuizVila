import { useContext } from "react";
import cart from "../assets/cart3.svg";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cantTotalProductos} = useContext(CartContext);

    if (cantTotalProductos() > 0) {
        return (
            <Link to={"/cart"} className="btn btn-light position-relative">
                <img src={cart} alt="Carrito" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantTotalProductos()}</span>
            </Link>
        )
    }
}

export default CartWidget;