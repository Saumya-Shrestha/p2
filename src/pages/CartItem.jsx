import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import SmallBanner from '../components/SmallBanner';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ mode }) => {
  const context = useContext(ProductContext);

  const {
    state: { cart },
    dispatch,
  } = context;

  console.log('Nav Cart: ', cart);

  return (
    <>
      <SmallBanner
        title='Cart Items'
        mode={mode}
      />
      <div className={`bg-${mode}`}>
        <div className='container py-5'>
          <h4 className={`${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'} fs-2 fw-bold text-center pb-4`}>Your Fruit Basket</h4>
          <div className='row'>
            {cart && cart.length > 0 ? (
              <div className='col-md-8'>
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className={`card mb-3 shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-white text-dark border-0'}`}
                  >
                    <div className='row g-0 align-items-center'>
                      <div className='col-md-2 text-center'>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='img-fluid rounded'
                          style={{ maxHeight: '80px' }}
                        />
                      </div>
                      <div className='col-md-5'>
                        <div className='card-body'>
                          <h5 className={`card-title mb-1 ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}>{item.title}</h5>
                          <p className='card-text mb-0'>Rs. {item.price}</p>
                          <small className={mode === 'dark' ? 'text-light' : 'text-muted'}>{item.description}</small>
                        </div>
                      </div>
                      <div className='col-md-3 text-center'>
                        <label
                          htmlFor={`qty-${item._id}`}
                          className={`form-label mb-0 pe-2 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}
                        >
                          Qty:
                        </label>
                        <select
                          value={item.qty}
                          onChange={(e) => {
                            dispatch({
                              type: 'UPDATE_CART_ITEM',
                              payload: { _id: item._id, qty: Number(e.target.value) },
                            });
                          }}
                          className={`form-select form-select-sm mt-1 ${
                            mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-white text-dark'
                          }`}
                          style={{ width: '70px', display: 'inline-block' }}
                        >
                          {[...Array(item.instock).keys()].map((x) => (
                            <option
                              value={x + 1}
                              key={x + 1}
                            >
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='col-md-2 text-center'>
                        <MdDelete
                          size={22}
                          className={mode === 'dark' ? 'dark-accent-icon' : 'light-accent-icon'}
                          onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='col-md-8'>
                <h4 className={`${mode === 'dark' ? 'dark-accent-icon' : 'light-accent-icon'} text-center`}>Your Cart Is Empty :(</h4>
              </div>
            )}

            <div className='col-md-4'>
              <div className={`card p-3 shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-white text-dark border-0'}`}>
                <h4 className={`mb-3 ${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}`}>Order Summary</h4>
                <p>
                  Total Items: <strong>{cart.length}</strong>
                </p>
                <p>
                  Total Price: <strong>Rs. {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</strong>
                </p>
                <button className={`btn btn-dark w-100 mt-2 ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'}`}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
