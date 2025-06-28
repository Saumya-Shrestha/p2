import React, { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { BsThreeDots } from 'react-icons/bs';
import EditProductModal from '../components/EditProductModal';
import SmallBanner from '../components/SmallBanner';
// import { useNavigate } from 'react-router-dom';

const FruitList = ({ mode }) => {
  const context = useContext(ProductContext);
  // const navigate = useNavigate();

  const {
    product,
    allProduct,
    state: { cart, products },
    dispatch,
    editProduct,
    deleteProduct,
  } = context;
  console.log('Cart: ', cart);
  console.log('Product: ', products);

  // const handleFruit = (fruit) => {
  //   console.log('You clicked on fruit: ', fruit.title);
  //   navigate(`${fruit._id}/${fruit.title}/${fruit.description}/${fruit.price}/${fruit.instock}`);
  // };

  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleMenu = (id) => {
    console.log('Fruit ID: ', id);
    setMenuVisible((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    console.log('Edit item id: ', product._id);
    setModalVisible(true);
  };

  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const saveEdit = (updateData) => {
    console.log('Save Edit Product: ', updateData);
    editProduct(selectedProduct._id, updateData);
  };

  const handleDelete = (id) => {
    console.log('Delete item id: ', id);
    deleteProduct(id);
  };

  useEffect(() => {
    allProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SmallBanner title='Products' />
      <div className={`bg-${mode}`}>
        <div className={`container py-5`}>
          <h4 className={`${mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'} fs-2 fw-bold text-center pb-4`}>Our Local Products</h4>
          <div className='row'>
            {product.map((fruit) => {
              return (
                <div
                  key={fruit._id}
                  className='col-md-3'
                >
                  <div className={`card shadow-sm ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-0'}`}>
                    <img
                      src={fruit.image}
                      className='card-img-top img-fluid rounded'
                      style={{ height: '300px', width: '100%', objectFit: 'contain' }}
                      alt={fruit.title}
                    />
                    <div className='card-body'>
                      <div className='d-flex justify-content-between'>
                        <h5 className='card-title'>{fruit.title}</h5>
                        <BsThreeDots
                          onClick={() => toggleMenu(fruit._id)}
                          className={mode === 'light' ? 'light-accent-icon' : 'dark-accent-icon'}
                        />
                        {menuVisible[fruit._id] && (
                          <div className={`menu-options ${mode === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark'}`}>
                            <button
                              className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} me-2`}
                              onClick={() => openEditModal(fruit)}
                            >
                              Edit
                            </button>
                            <button
                              className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'}`}
                              onClick={() => handleDelete(fruit._id)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      <p className='card-text'>{fruit.description}</p>
                      <p className='card-text'>Rs. {fruit.price}</p>

                      {cart && cart.some((p) => p._id === fruit._id) ? (
                        <button
                          className={`btn btn-dark ${mode === 'light' ? 'dark-accent-button' : 'light-accent-button'} px-4 py-2`}
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: fruit,
                            })
                          }
                        >
                          Remove from Cart
                        </button>
                      ) : (
                        <button
                          className={`btn btn-dark ${mode === 'light' ? 'light-accent-button' : 'dark-accent-button'} px-4 py-2`}
                          onClick={() =>
                            dispatch({
                              type: 'ADD_TO_CART',
                              payload: fruit,
                            })
                          }
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                  {modalVisible && selectedProduct && selectedProduct._id === fruit._id && (
                    <EditProductModal
                      product={selectedProduct}
                      onClose={closeEditModal}
                      onSave={saveEdit}
                      mode={mode}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FruitList;
