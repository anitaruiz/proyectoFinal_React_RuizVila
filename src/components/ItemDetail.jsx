import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4 text-start">
                    <h1 className="display-6">{producto.nombre}</h1>
                    <p><b>${producto.precio}</b></p>
                    <p>{producto.descripcion}</p>
                    <ItemCount item={producto} stock={producto.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;