import CartItem from '@/Components/CartItem/CartItem';
import FoodCard from '@/Components/FoodCard/FoodCard';
import React from 'react';

export const getFood = async () => {
  const res = await fetch(
    'https://taxi-kitchen-api.vercel.app/api/v1/foods/random',
  );
  const data = await res.json();
  return data.foods;
};

const Foods = async () => {
  const foods = await getFood();

  return (
    <div>
      <h2 className="text-center font-bold text-2xl mb-5">
        Foods: <span className="text-orange-400">{foods.length}</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {/* Left Side: Food Grid (takes up 2/3 of the space) */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-white">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {foods.map(food => (
              <FoodCard key={food.id} food={food}></FoodCard>
            ))}
          </div>
        </div>

        {/* Right Side: Cart List (takes up 1/3 of the space) */}
        <div className="sticky top-4 h-fit">
          <h2 className="text-xl font-bold mb-4 text-white">Your Cart</h2>
          <div className="bg-[#111111] p-6 rounded-2xl border border-neutral-800">
            <CartItem></CartItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
