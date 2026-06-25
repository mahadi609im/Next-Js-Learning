'use client';
import React from 'react';
import Title from './Title';
import { useRouter } from 'next/navigation';

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt('Enter your password');

    if (password === '1234') {
      router.push('/dashboard');
    } else {
      alert('Your password is vul');
    }
  };

  return (
    <section className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Background Image */}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
        <Title>Bismillah</Title>
        <p className="text-white text-lg mt-4 max-w-lg">
          Welcome to OctiMart! Your journey to a better shopping experience
          starts here.
        </p>
        <button
          onClick={() => handleBtn()}
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Banner;
