import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="col-md-4">
            <div className="card border-0">
                <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                    <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <p className="card-text"><span className="text-uppercase">{producto.nombre}</span><br /><b>${producto.precio}</b></p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;