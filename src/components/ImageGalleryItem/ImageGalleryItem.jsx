import React from 'react';
import style from './galleryitem.module.scss';
const ImageGalleryItem = ({ src, alt, largeImageURL, onClick }) => {
  return (
    <li className={style.galleryitem}>
      <img
        src={src}
        alt={alt}
        width='360px'
        onClick={() => {
          onClick(largeImageURL);
        }}
      />
    </li>
  );
};
export default ImageGalleryItem;

