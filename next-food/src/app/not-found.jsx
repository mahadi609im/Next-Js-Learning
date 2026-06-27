import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-center px-6 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute w-125 h-125 bg-[#E63900] opacity-10 rounded-full blur-[150px]"></div>

      {/* 404 Content */}
      <div className="z-10">
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-transparent bg-clip-text bg-linear-to-b from-[#E63900] to-[#FF8C00] drop-shadow-[0_0_25px_rgba(230,57,0,0.5)]">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Recipe Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          Looks like this page is missing from our kitchen. Let's get you back
          to the main menu.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="px-8 py-3 bg-[#E63900] text-white font-semibold rounded-full hover:bg-[#ff4500] transition-all duration-300 shadow-[0_0_20px_rgba(230,57,0,0.5)] hover:shadow-[0_0_30px_rgba(230,57,0,0.7)]"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
