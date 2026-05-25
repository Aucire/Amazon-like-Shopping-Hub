import CartContext from "../cartContext"
import { useContext } from "react"

export const Cart=()=>{

    const {cart,setCart} = useContext(CartContext)
    const Total=cart.reduce((sum,product)=>(sum+product.price),0)

    return(
        <>
            <h1>CART</h1>
            <section>
            {
                cart.map((product,index)=>(
                    <div key={index}>
                        <img src={product.image} alt="Product Image" className="h-75 w-75" />
                        <h1 className="text-red-600">{product.title}</h1>
                        <p>{product.description}</p>
                        <button className="border border-green-700 rounded-lg border-2 ml-1 px-3">{product.price}</button><br/>
                    </div>
                ))
            }
            </section>

            <section>
                {Total}
            </section>
        </>
    )
}