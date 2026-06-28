import React from 'react';

const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16 animate-pulse">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Image Skeleton */}
        <div className="relative">
          <div className="w-full h-100 md:h-125 bg-neutral-800 rounded-3xl"></div>
        </div>

        {/* Right: Details Skeleton */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <div className="h-4 w-32 bg-neutral-800 rounded mb-4"></div>
            <div className="h-12 w-3/4 bg-neutral-800 rounded mb-4"></div>
            <div className="h-10 w-20 bg-neutral-800 rounded"></div>
          </div>

          <div className="space-y-3">
            <div className="h-4 w-full bg-neutral-800 rounded"></div>
            <div className="h-4 w-full bg-neutral-800 rounded"></div>
            <div className="h-4 w-2/3 bg-neutral-800 rounded"></div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-40 bg-neutral-800 rounded-full"></div>
            <div className="h-12 w-32 bg-neutral-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
