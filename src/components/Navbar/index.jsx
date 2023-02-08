import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


import { Nav } from "./styles";

const Navbar = () => {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">
                        <ShoppingCart size={32}/>
                    </Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Navbar;