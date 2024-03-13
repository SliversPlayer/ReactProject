import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound'
import { CarritoProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'

export const App = () => {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/product/:pid' element={<ItemDetailsContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App
