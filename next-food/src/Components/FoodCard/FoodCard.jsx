import React from 'react';
import Link from 'next/link';
import AddToCartBtn from '../buttons/AddToCartBtn';

const FoodCard = ({ food }) => {
  return (
    <div className="group bg-[#111111] border border-neutral-800 rounded-2xl p-4 transition-all duration-300 hover:border-[#E63900]/50 hover:shadow-[0_0_20px_rgba(230,57,0,0.15)] flex flex-col gap-4">
      {/* Food Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-xl">
        <img
          src={food.foodImg}
          alt={food.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-1">
        <span className="text-[#FF8C00] text-xs font-semibold uppercase tracking-wider">
          {food.category}
        </span>
        <h3 className="text-white font-bold text-lg truncate">{food.title}</h3>
        <p className="text-[#E63900] font-bold text-xl">${food.price}</p>
      </div>

      {/* Button Section */}
      <div className="flex gap-2 mt-auto">
        {/* Details Button - Link component for navigation */}
        <Link
          href={`/foods/${food.id}`}
          className="flex-1 py-2 text-center text-white rounded-lg border border-neutral-700 hover:border-[#FF8C00] hover:text-[#FF8C00] transition-colors duration-300 font-medium text-sm"
        >
          Details
        </Link>

        {/* Add to Cart Button */}
        <AddToCartBtn food={food}></AddToCartBtn>
      </div>
    </div>
  );
};

export default FoodCard;
