
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import CheckOut from './pages/CheckOut';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/products/:productId' element={<ProductDetails />}></Route>

        </Routes >

      </div>
    </Router>
  );
}

export default App;
