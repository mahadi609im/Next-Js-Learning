'use client';
import { CartContext } from '@/context/CartContextProvider';
import React, { useContext, useState } from 'react';

const AddToCartBtn = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-2 py-2 bg-[#E63900] disabled:bg-[#E63900]/50 text-white rounded-lg border border-[#E63900] hover:bg-[#CC3200] transition-colors disabled:cursor-not-allowed duration-300 font-medium text-sm"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
