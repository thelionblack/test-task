import React from 'react';
import KittenImagePath from '@/assets/images/Kitten.png';

const KittenImage = () => {
  return (
    <div className='image-container'>
      <img className='image-container__image' src={KittenImagePath} alt='Kitten' />
    </div>
  );
};

export default KittenImage;
