import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
// import { AppContext } from "../../../context/AppContext";
// import { PRODUCTS } from "../../../products";

import { Wrapper } from "./styles";
const ProductItem = ({product}) => {
    const { addToCart, cartItems } = useContext(ShopContext)
    const {price, productImage, productName, id} = product;
    
    const cartItemAmount = cartItems[id]
    return (
        <Wrapper>
            <img src={productImage} alt={productName} />
            <h2>{productName}</h2>
            <p>${price.toFixed(2)}</p>
            <button onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && `(${cartItemAmount})`}</button>
        </Wrapper>
    )
}

export default ProductItem;