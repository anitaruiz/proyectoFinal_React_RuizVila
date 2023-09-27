import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemCount = ({item, stock}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);
    const {addItem} = useContext(CartContext);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            addItem(item, items);
            console.log("Se agregaron: " + items + " Productos al Carrito!");
        } else {
            console.log("No hay Stock disponible!");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <>
            <div className="row mb-1">
                <div className="col-md-6">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-light">Finalizar Compra</Link> : <button className="btn btn-light" onClick={onAdd}>Agregar al Carrito</button>} 
                </div>
            </div>
        </>
    )
}

export default ItemCount;