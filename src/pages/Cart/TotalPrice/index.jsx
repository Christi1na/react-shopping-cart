import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/shop-context";
import { Wrapper } from "./styles";

const TotalPrice = () => {
    const { getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()

    if (totalAmount > 0) {
        return (
            <Wrapper>
                <p>Subtotal: $ {totalAmount}</p>
                <div>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button> Checkout</button>
                </div>
            </Wrapper>
        )
    } else {
        return (
            <div>
                <h2>
                    Your cart is empty 
                </h2>
            </div>
        )
    }
    
}

export default TotalPrice;