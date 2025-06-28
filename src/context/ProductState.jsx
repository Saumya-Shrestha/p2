import React, { useReducer } from 'react';
import ProductContext from './ProductContext';
import { useState } from 'react';
import { cartReducer } from './Reducer';

const ProductState = (props) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const products = [
    {
      _id: 1,
      image: '/apple.png',
      title: 'Apple',
      description: 'This is a local product of mustang',
      price: 200,
      instock: 5,
    },
    {
      _id: 2,
      image: '/mango.png',
      title: 'Mango',
      description: 'This is a local product of terai',
      price: 300,
      instock: 2,
    },
    {
      _id: 3,
      image: '/banana.png',
      title: 'Banana',
      description: 'This is a local product of gorkha',
      price: 150,
      instock: 3,
    },
    {
      _id: 4,
      image: '/grapes.png',
      title: 'Grapes',
      description: 'This is a local product of ilam',
      price: 400,
      instock: 4,
    },
  ];

  const [product, setProduct] = useState(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  const [count, setCount] = useState(10);

  const [news, setnews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e09d9f7d5a38417fac4d41c193572a25');
      const data = await response.json();
      setnews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
      setnews({ articles: [] });
    }
  };

  const allProduct = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/product/getproduct`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': '1234567890',
        },
      });
      const data = await response.json();
      setProduct(data);
      console.log('Data From Backend: ', data);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to add product.');
    }
  };

  const editProduct = async (id, updateData) => {
    const { title, description, price, instock } = updateData;
    try {
      const response = await fetch(`http://localhost:5000/api/product/updateproduct/{id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': '1234567890',
        },
        body: JSON.stringify({ title, description, price, instock }),
      });
      const data = await response.json();
      console.log('Data from backend: ', data);
      allProduct();
    } catch (error) {
      console.log('Error: ', error);
      throw new Error('Failed to update product.');
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': '1234567890',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data deleted: ', data);
      allProduct();
    } catch (error) {
      console.log('Error: ', error);
      throw new Error('Faield to delete product.');
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{ state, dispatch, product, allProduct, editProduct, deleteProduct, setProduct, count, setCount, news, fetchData }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductState;
