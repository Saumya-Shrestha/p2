import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ title, mode, text, toggleMode }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleAuthClick = () => {
  //   const newLoginState = !isLoggedIn;
  //   setIsLoggedIn(newLoginState);
  //   notify(newLoginState);
  // };

  const context = useContext(ProductContext);

  const {
    state: { cart },
  } = context;
  console.log('Nav Cart: ', cart);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className='container-fluid'>
          <Link
            className={`${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'} navbar-brand`}
            to='/'
          >
            {title}
          </Link>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/about'
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/blog'
              >
                Blogs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/contact'
              >
                Contact Us
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                className='nav-link'
                to='/userlist'
              >
                Userlist
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/fruitlist'
              >
                Products
              </Link>
            </li>
          </ul>

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
            className={`mx-3 bg-transparent border-0 ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}
            onClick={toggleMode}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </button>

          <Link to='/login'>
            <button
              className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2`}
              // onClick={handleAuthClick}
            >
              {/* {isLoggedIn ? 'Logout' : 'Login'} */}
              Login
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
