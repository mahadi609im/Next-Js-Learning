import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname.startsWith(href) && 'text-blue-500'}`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
