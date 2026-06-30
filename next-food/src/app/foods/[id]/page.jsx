import React from 'react';

export async function generateMetadata({ params }) {
  const { id } = await params;

  const foodPromise = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await foodPromise.json();
  return {
    title: data.details.title,
  };
}

const getFoodDetails = async id => {
  const foodApi = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await foodApi.json();
  return data.details;
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getFoodDetails(id);
  if (!food)
    return <div className="text-white text-center p-20">Food not found!</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Image with Glow Effect */}
        <div className="relative group">
          <div className="absolute inset-0 bg-[#E63900] opacity-20 blur-[80px] rounded-full"></div>
          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img
              src={food.foodImg}
              alt={food.title}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right: Details Section */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <span className="text-[#FF8C00] font-semibold tracking-widest uppercase text-sm">
              {food.category} • {food.area}
            </span>
            <h1 className="text-5xl font-extrabold mt-2 mb-4">{food.title}</h1>
            <p className="text-4xl font-bold text-[#E63900]">${food.price}</p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Experience the exquisite flavors of {food.title}. A perfect blend of{' '}
            {food.category} tradition and fresh ingredients. This dish is
            prepared with passion to ensure a masterpiece in every bite.
          </p>

          <div className="flex gap-4">
            <a
              href={food.video}
              target="_blank"
              className="px-8 py-3 bg-[#E63900] text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(230,57,0,0.5)] transition-all"
            >
              Watch Recipe Video
            </a>
            <button className="px-8 py-3 bg-neutral-900 border border-neutral-700 rounded-full hover:border-[#FF8C00] transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
