import FoodCard from '@/Components/FoodCard/FoodCard';
import React from 'react';

export const getFood = async () => {
  const res = await fetch(
    ' https://taxi-kitchen-api.vercel.app/api/v1/foods/random',
  );
  const data = await res.json();
  return data.foods;
};

const Foods = async () => {
  const foods = await getFood();
  console.log(foods);

  return (
    <div>
      <h2 className="text-center font-bold text-2xl mb-5">
        Foods: {foods.length}
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {foods.map(food => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Foods;
