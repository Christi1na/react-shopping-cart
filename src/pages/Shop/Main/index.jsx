// import { PRODUCTS } from "../../products";
// import ProductItems from "../ProductItems";
import ProductItems from "../ProductItems";

import { Wrapper } from "./styles";

const Shop = () => {
    return (
        <Wrapper>
            <h1>Tech Shop</h1>
            <ProductItems/>
            {/* {PRODUCTS.map((product) => {
                return (
                    <div key={product.id}>
                        <h1>{product.productName}</h1>
                        <img src={product.productImage} alt={product.productName} />
                    </div>
                )
            })} */}
            
        </Wrapper>
    )
}

export default Shop;