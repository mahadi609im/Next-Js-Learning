'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link href={href} className={`${isActive ? 'text-[#ff4500]' : ''}`}>
      {children}
    </Link>
  );
};

export default Navlinks;
