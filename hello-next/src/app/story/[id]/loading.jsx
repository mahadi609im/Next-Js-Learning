import React from 'react';

const loading = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen w-full ">
      <div className="flex justify-center items-center flex-col gap-2">
        <h2 className="animated-spin text-5xl">🙂</h2>
      </div>
    </div>
  );
};

export default loading;
