import CartContext from "../cartContext"
import { useContext } from "react"

export const Cart = () => {

    const { cart, setCart } = useContext(CartContext)
    const Total = cart.reduce((sum, product) => (sum + product.price), 0)

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index))
    }

    return (
        <div className="cart-container">
            <h1 className="section-title">🛒 Your Shopping Cart</h1>

            {cart.length === 0 ? (
                <div className="alert alert-info text-center" role="alert">
                    <h4>Your cart is empty!</h4>
                    <p>Start adding products to your cart.</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((product, index) => (
                            <div key={index} className="cart-item">
                                <img src={product.image} alt={product.title} />
                                <div className="cart-item-details">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="product-price">${product.price.toFixed(2)}</span>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="btn btn-remove"
                                        >
                                            ✕ Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <p style={{ fontSize: "1.1rem" }}>Total Items: <strong>{cart.length}</strong></p>
                        <div className="total-price">${Total.toFixed(2)}</div>
                        <button className="btn btn-warning btn-lg mt-3" style={{ fontWeight: 700 }}>
                            💳 Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}