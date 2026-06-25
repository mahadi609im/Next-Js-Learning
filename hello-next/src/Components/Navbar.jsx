import Link from 'next/link';

const Navbar = () => {
  // Navigation links array to keep code DRY (Don't Repeat Yourself)
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'story', path: '/story' },
    { name: 'Contact', path: '/about/contact' },
    { name: 'Terms', path: '/about/terms' },
  ];

  return (
    <header className="px-6 py-5 bg-slate-800 text-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Dev-story
          </Link>
        </h2>

        <nav className="flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
