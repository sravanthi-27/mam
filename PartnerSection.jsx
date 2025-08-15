import React from 'react';
import b1 from '../assets/b1.jpg'; 
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';

const PartnerSection = () => {
  return (
    <>
      {/* Desktop Version - All 3 images in one row */}
      <div className="hidden md:flex justify-center bg-white w-full" style={{ height: '305.455px' }}>
        <div 
           className="flex gap-[22px] justify-center"
            style={{
            fontFamily: '"Sukhumvit Set", "Kanit", sans-serif',
            maxWidth: '1280px',
           width: 'fit-content' // 
            }}
          > 
         {/* Image 1 - Wide Banner */}
          <div
         style={{
        width: '630px',
        height: '305.455px',
        aspectRatio: '33 / 16',
        backgroundImage: `url(${b1})`,
        backgroundColor: '#f5f5f5',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    />
    
    {/* Image 2 */}
    <div
      style={{
        width: '305px',
        height: '305px',
        aspectRatio: '1 / 1',
        backgroundImage: `url(${b2})`,
        backgroundColor: '#f5f5f5',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    />
    
    {/* Image 3 */}
    <div
      style={{
        width: '305px',
        height: '305px',
        aspectRatio: '1 / 1',
        backgroundImage: `url(${b3})`,
        backgroundColor: '#f5f5f5',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '1px solid #e0e0e0'
      }}
    />
  </div>
</div>


      {/* Mobile Version - Stacked layout */}
      <div className="block md:hidden pl-[10px] pr-[30px] mb-10">
  <div className="space-y-4">
    {/* First large image */}
    <div
      className="w-full aspect-[33/16] rounded-3xl overflow-hidden shadow-md border border-gray-200"
      style={{
        backgroundImage: `url(${b1})`,
        backgroundColor: '#f5f5f5',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    />

    {/* Two side-by-side images */}
    <div className="flex gap-5">
      {[b2, b3].map((img, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 w-1/2 aspect-square rounded-3xl overflow-hidden shadow-md border border-gray-200"
          style={{
            backgroundImage: `url(${img})`,
            backgroundColor: '#f5f5f5',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '25px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      ))}
    </div>
  </div>
      </div>

    </>
  );
};

export default PartnerSection;