
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './components/Navbar'
import all_products from '../src/assets/products/all_product'
import new_collections from '../src/assets/products/new_collections'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Landing from './components/Landing'
import Pagination from './components/Pagiantion'
import Copyrights from './components/Copyrights'
import Cart from './components/Cart'
import Signup from './components/Signup'
import { useSelector } from 'react-redux'
import Login from './components/Login'



function App() {
  const {filter,cartVal} = useSelector(state=>state.cart)
  
  let Product;
  if(filter=='all'){
    Product = all_products
  }else if(filter == 'men'){
    Product = all_products.filter(item=>{
      return item.category === 'men'
    })
  }else if(filter == 'children'){
    Product = all_products.filter(item=>{
      return item.category === 'kid'
    })
  }
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Products products={Product}/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Pagination/>
    </BrowserRouter>

  )
}

export default App
