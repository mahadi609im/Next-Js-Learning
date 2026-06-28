import React from 'react';

export const SkeletonFoodCard = () => {
  return (
    <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-4 flex flex-col gap-4 animate-pulse">
      {/* Skeleton Image */}
      <div className="w-full h-48 bg-neutral-800 rounded-xl"></div>
      {/* Skeleton Info Section */}
      <div className="flex flex-col gap-2">
        <div className="w-20 h-3 bg-neutral-800 rounded-full"></div>
        <div className="w-full h-6 bg-neutral-800 rounded-lg"></div>
        <div className="w-16 h-5 bg-neutral-800 rounded-lg"></div>
      </div>
      {/* Skeleton Button Section */}
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 h-9 bg-neutral-800 rounded-lg"></div>
        <div className="flex-[2] h-9 bg-neutral-800 rounded-lg"></div>
      </div>
    </div>
  );
};
