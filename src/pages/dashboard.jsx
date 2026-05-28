import { useContext } from "react"
import ApiContext from "../apiContext"
import { ProductCard } from "./productcard"

export const Dashboard = () => {

    const api = useContext(ApiContext)

    return (
        <>
            <div className="container">
                <h1 className="section-title my-5">📦 Our Products</h1>
                <div className="products-grid">
                    {api.map(product => (
                        <div key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}