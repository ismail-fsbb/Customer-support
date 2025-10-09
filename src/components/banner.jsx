import React from 'react';

const Banner = ({ progressCount, resolvedCount }) => {
  return (
    <div className='container'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-10">
        <div className='p-10 rounded-lg text-center banner-bg-left bg-left'>
          <h4 className='text-white text-2xl'>In-Progress</h4>
          <h2 className='text-[60px] text-white'>{progressCount}</h2>
        </div>
        <div className='p-10 rounded-lg text-center banner-bg-right bg-left'>
          <h4 className='text-white text-2xl'>Resolved</h4>
          <h2 className='text-[60px] text-white'>{resolvedCount}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
