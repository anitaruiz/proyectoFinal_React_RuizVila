import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Link to={"/"}>
                        <img src="https://acdn.mitiendanube.com/stores/003/039/113/themes/common/logo-1833024819-1681757774-e93386c52fe173659450c309512c311e1681757774-480-0.png?0" alt="Lupita Store" width={160} />
                    </Link>
                </div>
                <div className="col-md-8">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link text-warning-emphasis" to="/category/remeras">Remeras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning-emphasis" to="/category/abrigos">Abrigos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-warning-emphasis" to="/category/pantalones">Pantalones</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;