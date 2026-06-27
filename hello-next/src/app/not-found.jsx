import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen w-full ">
      <div className="flex justify-center items-center flex-col gap-2">
        <h2>404 | Page not found</h2>
        <Link href={'/'} className="text-blue-500">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
