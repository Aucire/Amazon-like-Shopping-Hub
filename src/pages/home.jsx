import { Navigate, useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    const submitFn = (event) => {
        event.preventDefault()
        navigate("/dash")
    }
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
                <h1 className="mb-4">Welcome to ShopHub</h1>
                <p className="text-center mb-4" style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
                    Discover amazing products at unbeatable prices. Login to explore our exclusive collection!
                </p>
                <form onSubmit={submitFn} className="shadow-lg rounded-4">
                    <div className="mb-3">
                        <input type="text" placeholder="Username" className="form-control form-control-lg" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="Password" className="form-control form-control-lg" required />
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary w-100">LOGIN NOW</button>
                </form>
            </div>
        </>
    )
}