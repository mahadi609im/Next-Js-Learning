import CartItem from '@/Components/CartItem/CartItem';
import FoodCard from '@/Components/FoodCard/FoodCard';
import SearchFood from '@/Components/SearchFood';
import { Search } from 'lucide-react';
import React from 'react';
import { openSans } from '../layout';

export function generateStaticParams() {
  return [{ id: '52894' }, { id: '52872' }];
}

export const getFood = async search => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  return data.foods;
};

export const metadata = {
  title: 'All Foods',
};

const Foods = async ({ searchParams }) => {
  const { search = '' } = await searchParams;
  const foods = await getFood(search);

  return (
    <div>
      <div className="flex flex-col items-center mb-8 gap-4">
        <h2 className={`${openSans.className} font-bold text-2xl`}>
          Foods: <span className="text-orange-400">{foods.length}</span>
        </h2>

        <SearchFood search={search}></SearchFood>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        {/* Left Side: Food Grid (takes up 2/3 of the space) */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 text-white">Our Menu</h2>
          {foods.length ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {foods.map(food => (
                  <FoodCard key={food.id} food={food}></FoodCard>
                ))}
              </div>
            </>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center">
              <div className="p-6  mb-4 ">
                <Search className="w-12 h-12 text-neutral-600" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                No foods found
              </h3>
              <p className="text-neutral-500 max-w-sm">
                We couldnt find any items matching your search. Please try a
                different keyword or check your spelling.
              </p>
            </div>
          )}
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
