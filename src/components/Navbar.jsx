import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar2 = ({ mode, text, toggleMode }) => {
  const context = useContext(ProductContext);
  const {
    state: { cart },
  } = context;

  return (
    <header className={`header-section bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
      <div className='top-nav'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <ul className='tn-left'>
                <li>
                  <i className={`fa fa-phone ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}></i> (+977) 1 2345678
                </li>
                <li>
                  <i className={`fa fa-envelope ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}></i> reservations@hamrohotel.com
                </li>
              </ul>
            </div>
            <div className='col-md-6'>
              <div className='tn-right'>
                <Link to='/cartitems'>
                  <button
                    className={`mx-2 bg-transparent border-0 ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'} position-relative`}
                    style={{ cursor: 'pointer' }}
                  >
                    <FaShoppingCart />
                    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                      {cart.length}
                      <span className='visually-hidden'>cart details</span>
                    </span>
                  </button>
                </Link>

                <button
                  className={`mx-4 bg-transparent border-0 ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}
                  onClick={toggleMode}
                  style={{ cursor: 'pointer' }}
                >
                  {text}
                </button>

                <Link to='/login'>
                  <button className={`${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} bk-btn`}>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <div className='logo'>
                <Link to='/'>
                  <img
                    src={logo}
                    alt='HAMRO HOTEL'
                    style={{ height: '32px' }}
                    className='mt-2'
                  />
                </Link>
              </div>
            </div>
            <div className='col-md-10'>
              <div className='nav-menu text-end'>
                <nav className={`mainmenu mainmenu-${mode}`}>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/about'>About</Link>
                    </li>
                    <li>
                      <Link to='/blog'>Blogs</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                      <Link to='/fruitlist'>Products</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
