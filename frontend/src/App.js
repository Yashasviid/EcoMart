
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home  from './pages/Home';
import Product from './pages/Product';
import { LoginSignup } from './pages/LoginSignup';  
import { ShopCategory } from './pages/ShopCategory';  
import Cart from './pages/Cart';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<ShopCategory category="clothes" />} />
          <Route path="/books" element={<ShopCategory category="books" />} />
          <Route path="/grocery" element={<ShopCategory category="grocery" />} />
          <Route path="/stationary" element={<ShopCategory category="stationary" />} />
          <Route path="/appliances" element={<ShopCategory category="appliances" />} />
          <Route path='/Product' element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/Cart' element={<Cart />} />
          <Route path='/LoginSignup' element={<LoginSignup />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
