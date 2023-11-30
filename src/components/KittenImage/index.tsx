import React, { lazy, useEffect, useState } from 'react';
import KittenImagePath from '@/assets/images/Kitten.png';

const HANDLER_TYPE_RESIZE = 'resize';
const IMG_ALT = 'Kitten';

enum EClassName {
  container = 'image-container',
  image = `${EClassName.container}__image`
}

const KittenImage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener(HANDLER_TYPE_RESIZE, handleResize);

    return () => {
      window.removeEventListener(HANDLER_TYPE_RESIZE, handleResize);
    };
  }, []);

  return (
    windowWidth > 400 && (
      <div className={EClassName.container}>
        <img className={EClassName.image} src={KittenImagePath} alt={IMG_ALT} />
      </div>
    )
  );
};

export default KittenImage;
