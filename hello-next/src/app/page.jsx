import Banner from '@/Components/Banner';

export default function Home() {
  return (
    <main className="px-4 py-8">
      {/* Banner Section */}
      <Banner></Banner>
      {/* Content Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Latest Products</h2>
        {/* তোমার প্রোডাক্ট কার্ডগুলো এখানে আসবে */}
      </div>
    </main>
  );
}
