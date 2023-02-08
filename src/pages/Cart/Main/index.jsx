// import { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
import ProductItems from "../ProductItems";
import TotalPrice from "../TotalPrice";
import { Wrapper } from "./styles";

const Cart = () => {

    // const { cartItems, removeFromCart, addToCart, updateCartItemCount, getTotalCartAmount } = useContext(ShopContext)
    return (
        <Wrapper>
            <h1>Shopping cart</h1>

            <ProductItems />

            <TotalPrice/>
            
        </Wrapper>
    )
}

export default Cart;