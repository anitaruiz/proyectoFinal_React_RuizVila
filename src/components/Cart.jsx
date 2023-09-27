import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, clear, removeItem, cantTotalProductos, sumaTotalProductos} = useContext(CartContext);

    if (cantTotalProductos() > 0) {
        return (
            <table className="table">
                <tbody>
                    {cart.map(item => (<tr key={item.idx}>
                        <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                        <td className="align-middle">{item.nombre}</td>
                        <td className="align-middle">${item.precio}</td>
                        <td className="align-middle">{item.quantity}</td>
                        <td className="align-middle">${item.precio * item.quantity}</td>
                        <td className="align-middle"><button className="btn btn-light" onClick={() => {removeItem(item.idx)}}>[Eliminar]</button></td>
                    </tr>))}
                    <tr>
                        <td className="align-middle" colSpan={4}>Total a Pagar</td>
                        <td className="align-middle">${sumaTotalProductos()}</td>
                        <td className="align-middle"><Link to={"/checkout"} className="btn btn-light">Checkout</Link></td>
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return (
            <>
                <div className="alert alert-warning" role="alert">No se encontraron Productos!</div>
                <Link to={"/"} className="btn btn-light">Ir a la Página Principal</Link>
            </>
        )
    }    
}

export default Cart;