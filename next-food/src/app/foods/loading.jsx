import { SkeletonFoodCard } from '@/Components/SkeletonFoodCard/SkeletonFoodCard';
import React from 'react';

const loading = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonFoodCard key={index}></SkeletonFoodCard>
      ))}
    </div>
  );
};

export default loading;
