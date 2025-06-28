import { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import ProductState from './context/ProductState';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FruitList from './pages/FruitList';
import FruitDetail from './pages/FruitDetail';
import CartItem from './pages/CartItem';
import AddProduct from './pages/AddProduct';
import CompanyForm from './pages/CompanyForm';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
  const [text, setText] = useState(
    localStorage.getItem('theme') === 'dark' ? <i className='fa-solid fa-sun'></i> : <i className='fa-solid fa-moon'></i>
  );

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText(<i className='fa-solid fa-moon'></i>);
      localStorage.setItem('theme', 'light');
    } else {
      setMode('dark');
      setText(<i className='fa-solid fa-sun'></i>);
      localStorage.setItem('theme', 'dark');
    }
  };

  let title = 'HAMRO HOTEL';
  // const notify = (isLogin) => toast(isLogin ? 'Login Successful' : 'Logout Successful');

  return (
    <>
      <ProductState>
        <Navbar
          title={title}
          mode={mode}
          text={text}
          toggleMode={toggleMode}
          // notify={notify}
        />
        {/* <ToastContainer
            hideProgressBar={false}
            theme={mode}
          /> */}

        <Routes>
          <Route
            path='/'
            element={<Home mode={mode} />}
          />
          <Route
            path='/about'
            element={<About mode={mode} />}
          />
          <Route
            path='/blog'
            element={<Blog mode={mode} />}
          />
          <Route
            path='/contact'
            element={<Contact mode={mode} />}
          />
          <Route
            path='/fruitlist'
            element={<FruitList mode={mode} />}
          />
          <Route
            path='fruitlist/:id/:title/:description/:price/:instock'
            element={<FruitDetail />}
          />
          <Route
            path='/cartitems'
            element={<CartItem mode={mode} />}
          />
          <Route
            path='/login'
            element={<Login mode={mode} />}
          />
          <Route
            path='/signup'
            element={<Signup mode={mode} />}
          />
          <Route
            path='/addproduct'
            element={<AddProduct mode={mode} />}
          />
          <Route
            path='/companyform'
            element={<CompanyForm mode={mode} />}
          />
        </Routes>

        <Footer mode={mode} />
      </ProductState>
    </>
  );
}

export default App;
