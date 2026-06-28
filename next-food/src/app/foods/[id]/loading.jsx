import FoodDetailsSkeleton from '@/Components/FoodDetailsSkeleton/FoodDetailsSkeleton';
import { SkeletonFoodCard } from '@/Components/SkeletonFoodCard/SkeletonFoodCard';
import React from 'react';

const loading = () => {
  return (
    <div>
      {Array.from({ length: 1 }).map((_, index) => (
        <FoodDetailsSkeleton key={index}></FoodDetailsSkeleton>
      ))}
    </div>
  );
};

export default loading;
