'use client';
import React, { useEffect, useState } from 'react';
import ReviewCard from '@/Components/ReviewCard/ReviewCard';
import ReviewSkeleton from '@/app/reviews/loading';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-2xl mb-5">
        Review: <span className="text-orange-400">{reviews.length}</span>
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {loading ? (
          [...Array(12)].map((_, index) => (
            <ReviewSkeleton key={index}></ReviewSkeleton>
          ))
        ) : (
          <>
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review}></ReviewCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
