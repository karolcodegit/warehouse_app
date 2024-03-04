import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SingleProduct from './screens/SingleProducts'
import Home from './view/Home'
import Login from './view/Login'
import Cart from './view/Cart'
import ProductsList from './view/ProductsList'
import Order from './view/Order'
import Payment from './view/Payment'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/payment' element={<Payment />} />

          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
