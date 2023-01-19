import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import Products from "./products"
import ProductDetail from "./productDetail"
import Login from "./login"

const App = ()=> {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<Products/>} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="auth/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App