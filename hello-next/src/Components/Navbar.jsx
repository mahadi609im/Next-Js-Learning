'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navlink from './Navlink';

const Navbar = () => {
  const pathName = usePathname();
  let dashboard = pathName.startsWith('/dashboard');
  if (dashboard) {
    return <></>;
  }

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'story', path: '/story' },
    { name: 'Tutorials', path: '/tutorials' },
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
            <Navlink
              key={link.path}
              href={link.path}
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Navlink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
