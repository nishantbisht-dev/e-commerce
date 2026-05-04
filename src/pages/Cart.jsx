import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            <h1>Your Cart</h1>

            {cartItems.length === 0 ? (
                <p>
                    Your cart is empty
                </p>
            ) : (
                cartItems.map((item, index) => (
                    <div
                        key={index}
                        className=""
                    >

                        <img
                            src={item.image}
                            alt={item.name}
                            className=""
                        />

                        <div>
                            <h2>{item.name}</h2>
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                            <p>{item.price}</p>
                        </div>

                        <button
                            onClick={() => removeFromCart(index)}
                            className=""
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart;