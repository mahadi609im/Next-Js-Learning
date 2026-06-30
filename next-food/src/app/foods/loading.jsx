import { SkeletonFoodCard } from '@/Components/SkeletonFoodCard/SkeletonFoodCard';
import React from 'react';

const Loading = () => {
  return (
    <div className="p-4">
      {/* Search Bar Skeleton */}
      <div className="flex flex-col items-center mb-12 gap-4">
        <div className="w-48 h-8 bg-neutral-800 rounded animate-pulse"></div>
        <div className="w-full max-w-md h-12 bg-neutral-800 rounded-full animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Food Grid Skeleton */}
        <div className="lg:col-span-2">
          <div className="w-32 h-6 bg-neutral-800 rounded mb-6 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonFoodCard key={index} />
            ))}
          </div>
        </div>

        {/* Right Side: Cart Skeleton */}
        <div className="sticky top-4 h-fit">
          <div className="w-32 h-6 bg-neutral-800 rounded mb-4 animate-pulse"></div>
          <div className="bg-[#111111] p-6 rounded-2xl border border-neutral-800 h-64 animate-pulse">
            <div className="space-y-4">
              <div className="h-12 bg-neutral-800 rounded"></div>
              <div className="h-12 bg-neutral-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
