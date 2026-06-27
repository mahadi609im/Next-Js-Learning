import Link from 'next/link';
import React from 'react';

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-6 min-h-screen">
      <div className="col-span-3 p-8 bg-slate-800">
        <h2 className="text-2xl font-bold tracking-tight">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Dev-story
          </Link>
        </h2>

        <div className="flex flex-col gap-4 mt-6">
          <Link href={'/dashboard/add-story'}>Add Story</Link>
          <Link href={'/dashboard/my-profile'}>My Profile</Link>
          <Link href={'/dashboard/setting'}>Settings</Link>
        </div>
      </div>
      <div className="col-span-9 p-8">{children}</div>
    </div>
  );
};

export default layout;
