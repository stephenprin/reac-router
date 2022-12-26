import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import Products from './pages/Products';
import SingleProducts from './pages/SingleProduct';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='products' element={<Products />} />
      <Route path='products/productId' element={<SingleProducts />} />
      <Route path='*' element={<Error />} />
    </Route>
  </Routes>
 </Router>
  )
}

export default App;
