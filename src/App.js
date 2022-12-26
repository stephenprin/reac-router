import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import Products from './pages/Products';
import SingleProducts from './pages/SingleProduct';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
    <Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          } />
      <Route path='products' element={<Products />} />
      <Route path='login' element={<Login setUser={setUser} />} />
      <Route path='products/:productId' element={<SingleProducts />} />
      <Route path='*' element={<Error />} />
    </Route>
  </Routes>
 </Router>
  )
}

export default App;
