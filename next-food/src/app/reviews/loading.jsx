import React from 'react';

const ReviewSkeleton = () => {
  return (
    <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 w-full animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-neutral-800" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-neutral-800 rounded" />
          <div className="h-3 w-20 bg-neutral-800 rounded" />
        </div>
      </div>

      {/* Review Content Skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full bg-neutral-800 rounded" />
        <div className="h-3 w-[90%] bg-neutral-800 rounded" />
        <div className="h-3 w-[60%] bg-neutral-800 rounded" />
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
        <div className="h-3 w-20 bg-neutral-800 rounded" />
        <div className="h-8 w-16 bg-neutral-800 rounded-full" />
      </div>
    </div>
  );
};

export default ReviewSkeleton;
