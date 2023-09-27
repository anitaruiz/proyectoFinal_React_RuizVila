import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState(false);
    const {cart, clear, removeItem, cantTotalProductos, sumaTotalProductos} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre && email && telefono) {
            const order = {
                buyer:{nombre, email, telefono},
                items:cart.map(item => ({id:item.id, title:item.nombre, quantity:item.quantity, price:item.precio})),
                total:sumaTotalProductos(),
                date:serverTimestamp()
            };

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(resultado => {
                setOrderId(resultado.id);
            });
        }
    }

    if (cantTotalProductos() > 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}}  />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Teléfono</label>
                                <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                            </div>
                            <button type="button" class="btn btn-light" onClick={generarOrden}>Generar Orden</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (<tr key={item.idx}>
                                    <td><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">${item.precio}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.precio * item.quantity}</td>
                                </tr>))}
                                <tr>
                                    <td className="align-middle" colSpan={4}>Total a Pagar</td>
                                    <td className="align-middle">${sumaTotalProductos()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-light" role="alert">
                            <h1 className="fs-1 text">Gracias por tu Compra!</h1>
                            <p>Tu Orden de Compra es: <b>{orderId}</b></p>
                            <Link to={"/"} className="btn btn-light" onClick={() => {clear()}}>Ir a la Página Principal</Link>
                        </div> : ""}
                    </div>
                </div>
            </div>
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

export default Checkout;