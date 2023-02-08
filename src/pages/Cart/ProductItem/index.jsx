import { useContext } from "react"
import { ShopContext } from "../../../context/shop-context"
import { Wrapper } from "./styles"

const ProductItem = ({data}) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
    return (
        <Wrapper>
            <div>
                <img src={data.productImage} alt="" />
                <div>
                    <h2>{data.productName}</h2>
                    <p>$ {(data.price).toFixed(2)}</p>
                    <div>
                        <button onClick={() => removeFromCart(data.id)}>-</button>
                        <input value={cartItems[data.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)} />
                        <button onClick={() => addToCart(data.id)}>+</button>
                    </div>
                    {/* <p>Total price: ${totalPrice.toFixed(2)}</p> */}

                </div>

            </div>
        </Wrapper>
    )
}

export default ProductItem