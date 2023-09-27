import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                setLoading(false);
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
        });
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <Carrousel />
                </div>
            </div>
            <div className="row">
                {loading ? <Loading /> : <ItemList productos={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;