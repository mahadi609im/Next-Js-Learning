import { Heart, Star } from 'lucide-react';
import React, { useState } from 'react';

const ReviewCard = ({ review }) => {
  // Initialize likes based on the length of the likes array from your data
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(review?.likes?.length || 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => (liked ? prev - 1 : prev + 1));
  };

  // Format date: Converts ISO string to readable format
  const formattedDate = new Date(review?.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:border-[#FF8C00]/30 hover:shadow-[0_0_15px_rgba(255,140,0,0.05)]">
      {/* Header: User Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review?.photo || '/default-avatar.png'}
          alt={review?.user}
          className="w-12 h-12 rounded-full border border-neutral-700 object-cover"
        />
        <div>
          <h4 className="text-white font-bold">{review?.user}</h4>
          <div className="flex text-[#FF8C00] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < review?.rating ? 'text-[#FF8C00]' : 'text-neutral-700'
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Content */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
        {`"${review?.review}"`}
      </p>

      {/* Footer: Date and Like Button */}
      <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
        <span className="text-neutral-600 text-xs">{formattedDate}</span>

        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 ${
            liked
              ? 'border-[#E63900] bg-[#E63900]/10 text-[#E63900]'
              : 'border-neutral-700 text-neutral-500 hover:border-white hover:text-white'
          }`}
        >
          <Heart
            size={16}
            className={liked ? 'fill-[#E63900]' : 'fill-transparent'}
          />
          <span className="text-xs font-semibold">{likesCount}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
