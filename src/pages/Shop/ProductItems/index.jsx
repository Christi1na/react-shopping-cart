import { PRODUCTS } from "../../../products"
import ProductItem from "../ProductItem"
import { Wrapper } from "./styles"

const ProductItems = () => {
    return (
        <Wrapper>
            {PRODUCTS.map((product) => {
                return <ProductItem key={product.id} product={product}/>
            })}
        </Wrapper>
        
    )
}

export default ProductItems;