import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing.jsx"
import "../src/App.css"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Menu from "./pages/Menu.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import Cart from "./pages/Cart.jsx"
import Admin from "./pages/Admin.jsx"
import Checkout from "./pages/Checkout.jsx"
import { FavoritesProvider } from "./context/FavoritesContext.jsx"
import FavoritesPage from "./pages/FavoritesPage.jsx"
import Payment from "./pages/Paystack.jsx"
import Verification from "./pages/Verification.jsx"


const App = () => {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/payment" element={<Payment />} />
              {/* <Route path="/verify" element={<Verification />}/> */}
            </Routes>
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </>
  )
}

export default App