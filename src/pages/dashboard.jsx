import { useContext } from "react"
import ApiContext from "../apiContext"
import { ProductCard } from "./productcard"

export const Dashboard=()=>{

    const api=useContext(ApiContext)

    return(
        <>
        <h1>DASHBOARD PAGE</h1>

        <section className="grid grid-cols-4 gap-4">
            {api.map(product=>(
                <div key={product.id}>
                    <ProductCard product={product}/>                    
                </div>
            ))}
        </section>
        </>
    )
}