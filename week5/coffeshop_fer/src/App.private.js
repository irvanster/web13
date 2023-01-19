import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Home from "./home"
import Products from "./products"
import ProductDetail from "./productDetail"
import Login from "./login"


const PrivateRoute = ({path, element})=> {
  // harus login
  // hak akses -> login -> role || -> private route
  const navigate = useNavigate()
  if(!localStorage.getItem('@userLogin')) {
    navigate('/auth/login')
  }
  return <Route path={path} element={element} />
  
}
const PublicRoute = ({path, element, restrict})=> {
    //user journey terbatas
  // ketika sudah login maka, dia ga bisa balik lagi ke login
  // belum login, maka dia akses
  //
  const navigate = useNavigate()
  if(restrict) {
    if(localStorage.getItem('@userLogin')) {
      navigate('/')
    }
  }
  return <Route path={path} element={element} />
  
}

const App = ()=> {
  return(
    <BrowserRouter>
      <Routes>
        <PublicRoute path="/" element={<Home/>} />
        <PublicRoute path="products" element={<Products/>} />
        <PublicRoute path="products/:id" element={<ProductDetail />} />
        <PublicRoute restrict={true} path="auth/login" element={<Login />} />
       
        <PrivateRoute path="payment" element={<Home />} />
        <PrivateRoute path="history" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App