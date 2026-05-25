import { Navigate,useNavigate } from "react-router-dom"

export const Home=()=>{
    const navigate=useNavigate()
    const submitFn=(event)=>{
        event.preventDefault()
        navigate("/dash")
    }
    return(
        <>
            <h1>HOME PAGE</h1>
            <div>
                <form onSubmit={submitFn}>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </>
    )
}