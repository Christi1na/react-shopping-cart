import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import { PRODUCTS } from "../../../products";
import ProductItem from "../ProductItem";

import { Wrapper } from "./styles";

const ProductItems = () => {
    const { cartItems } = useContext(ShopContext)
    return (
        <Wrapper>
            {PRODUCTS.map((product, index) => {
                // const totalPrice = cartItems[product.id] * product.price;
                if (cartItems[product.id]) {

                    return <ProductItem key={index} data={product}/>
                } else {
                    return null
                }
            })} 
        </Wrapper>
    )
}

export default ProductItems;