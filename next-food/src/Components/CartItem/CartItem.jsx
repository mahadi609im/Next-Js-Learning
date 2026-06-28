'use client';
import { CartContext } from '@/context/CartContextProvider';
import React, { useContext } from 'react';
import { Trash2 } from 'lucide-react'; // Optional: for remove button

const CartItem = () => {
  const { cart, removeFromCart } = useContext(CartContext); // Assuming you have a removeFromCart function

  return (
    <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6">
      <h2 className="text-white font-bold text-lg mb-6 border-b border-neutral-800 pb-4">
        {cart.length} Items in Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-neutral-500 text-sm">Your cart is empty..</p>
      ) : (
        <ul className="space-y-4">
          {cart.map(item => (
            <li key={item.id} className="flex items-center gap-4">
              {/* Thumbnail */}
              <img
                src={item.foodImg}
                alt={item.title}
                className="w-16 h-16 rounded-lg object-cover border border-neutral-800"
              />

              {/* Details */}
              <div className="flex-1">
                <h4 className="text-white font-semibold text-sm">
                  {item.title}
                </h4>
                <p className="text-[#FF8C00] font-bold text-sm">
                  ${item.price}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-neutral-600 hover:text-[#E63900] transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Optional: Summary Section */}
      {cart.length > 0 && (
        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center">
          <span className="text-neutral-400">Total</span>
          <span className="text-white font-bold text-lg">
            ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartItem;
