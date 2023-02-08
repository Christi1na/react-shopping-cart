import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop/Main';  
import Cart from './pages/Cart/Main';

import './App.css';
import { ShopContextProvider } from './context/shop-context';

function App() {
  
  return (
    <ShopContextProvider>
      <Router className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </Router>
    </ShopContextProvider>
    
  );
}

export default App;
