import { useState } from "react"
import CartContext from "../cartContext"
import { useContext } from "react"


export const ProductCard=({product})=>{
    const {cart,setCart} = useContext(CartContext)

    const clickFn=()=>{setCart(prev=>[...prev,product]) }

    return(
        <div className="border border-gray-400 border-4 rounded-xl w-75 min-h-100">
            <img src={product.image} alt="Product Image" className="h-75 w-75" />
            <h1 className="text-red-600">{product.title}</h1>
            <p>{product.description}</p>
            <button className="border border-green-700 rounded-lg border-2 ml-1 px-3">{product.price}</button><br/>

            <button onClick={clickFn} className="border border-green-700 rounded-lg border-2 ml-1 px-3">Add to cart</button>
        </div>
    )
}