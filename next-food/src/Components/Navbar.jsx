import Link from 'next/link';
import Image from 'next/image';
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0a0a0a] border-b border-neutral-900 sticky top-0 z-50">
      {/* Logo Section */}
      <Link
        href="/"
        className="flex items-center gap-2 transition-transform hover:scale-105"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="drop-shadow-[0_0_8px_rgba(230,57,0,0.3)]"
          loading="eager"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-neutral-400 font-medium text-sm">
        <Navlinks
          href="/"
          className="hover:text-[#FF8C00] transition-colors duration-200"
        >
          Home
        </Navlinks>
        <Navlinks
          href="/foods"
          className="hover:text-[#FF8C00] transition-colors duration-200"
        >
          Foods
        </Navlinks>
        <Navlinks
          href="/reviews"
          className="hover:text-[#FF8C00] transition-colors duration-200"
        >
          Reviews
        </Navlinks>
        <Navlinks
          href="/about"
          className="hover:text-[#FF8C00] transition-colors duration-200"
        >
          About
        </Navlinks>
      </div>

      {/* CTA Button */}
      <Link
        href="/explore"
        className="px-5 py-2 bg-[#E63900] text-white rounded-full hover:bg-[#FF8C00] transition-all duration-300 text-sm font-medium shadow-[0_0_15px_rgba(230,57,0,0.4)] hover:shadow-[0_0_25px_rgba(255,140,0,0.7)]"
      >
        Explore Now
      </Link>
    </nav>
  );
};

export default Navbar;
