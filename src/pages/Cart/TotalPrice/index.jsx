import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";

const TotalPrice = () => {
    const { getTotalCartAmount } = useContext(ShopContext)
    return (
        <div>
            <p>Subtotal: $ {getTotalCartAmount()}</p>
            <div>
                <button>Continue Shopping</button>
                <button> Checkout</button>
            </div>
        </div>
    )
}

export default TotalPrice;