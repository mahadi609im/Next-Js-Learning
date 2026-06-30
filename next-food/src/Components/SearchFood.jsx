'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const SearchFood = ({ search }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search'); // Removes the key entirely if empty
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
      <input
        type="text"
        name="search"
        placeholder="Search food..."
        className="px-4 py-2 rounded-lg bg-[#111111] border border-neutral-700 text-white focus:outline-none focus:border-orange-500 w-full md:w-64"
      />
      <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors cursor-pointer">
        Search
      </button>
    </form>
  );
};

export default SearchFood;
