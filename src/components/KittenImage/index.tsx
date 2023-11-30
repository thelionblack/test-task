import React, { useEffect, useState } from 'react';
import KittenImagePath from '@/assets/images/Kitten.png';

const KittenImage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    windowWidth > 400 && (
      <div className='image-container'>
        <img className='image-container__image' src={KittenImagePath} alt='Kitten' />
      </div>
    )
  );
};

export default KittenImage;
