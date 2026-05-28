import { Routes, Route, Link } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Dashboard } from "./pages/dashboard"
import { useState } from "react"
import { useEffect } from "react"
import ApiContext from "./apiContext"
import CartContext from "./cartContext"
import { Cart } from "./pages/cart"

export const App = () => {
  const [api, setApi] = useState([])
  const [cart, setCart] = useState([])
  const [theme, setTheme] = useState(true)

  useEffect(() => {

    const fetchFn = async () => {

      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()

      console.log(data);
      setApi(data)
    }
    fetchFn()
  }, [])

  const clickfxtn = () => {
    theme
      ? setTheme(false)
      : setTheme(true)
  }

  return (
    <main className={theme ? "Light" : "Dark"}>
      <nav className="navbar-custom">
        <div className="nav-brand">
          🛒 ShopHub
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dash">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            Cart <span className="badge bg-danger">{cart.length}</span>
          </Link>
        </div>
        <button onClick={clickfxtn}>{theme ? "🌙 Dark Mode" : "☀️ Light Mode"}</button>
      </nav>

      <ApiContext.Provider value={api}>
        <CartContext value={{ cart, setCart }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext>
      </ApiContext.Provider>

    </main>
  )
}