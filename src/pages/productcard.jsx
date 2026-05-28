import { useState } from "react"
import CartContext from "../cartContext"
import { useContext } from "react"


export const ProductCard = ({ product }) => {
    const { cart, setCart } = useContext(CartContext)
    const [added, setAdded] = useState(false)

    const clickFn = () => {
        setCart(prev => [...prev, product])
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="d-flex justify-content-between align-items-center px-3 mt-auto pb-3">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <button
                    onClick={clickFn}
                    className={`btn ${added ? 'btn-success' : 'btn-cart'}`}
                >
                    {added ? '✓ Added' : '🛒 Add to Cart'}
                </button>
            </div>
        </div>
    )
}