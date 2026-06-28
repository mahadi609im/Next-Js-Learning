'use client';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './loading';
import ReviewCard from '@/Components/ReviewCard/ReviewCard';

const Reviews = () => {
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
        <div className="grid grid-cols-3 gap-5 mt-5">
          {loading ? (
            [...Array(12)].map((_, index) => (
              <ReviewLoading key={index}></ReviewLoading>
            ))
          ) : (
            <>
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review}></ReviewCard>
              ))}
            </>
          )}
        </div>
      </h2>
    </div>
  );
};

export default Reviews;
