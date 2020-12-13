import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../redux/actions/addToCartActions';

const Shop = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const data = useSelector((state) => console.log(state.cartReducer.cart));
  const dispatch = useDispatch();
  console.log(dispatch);

  const submitForm = (e) => {
    e.preventDefault();
    const items = {
      name,
      price,
      id: Math.floor(Math.random() * 100),
    };
    dispatch(addToCartAction(items));
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Shop;
