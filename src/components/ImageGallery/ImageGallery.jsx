import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ photos, onClick }) => {
  return (
    <ul className="gallery">
      {photos.map(photo => (
        <ImageGalleryItem
          key={photo.id}
          src={photo.webformatURL}
          alt={photo.tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default ImageGallery;
// export default class ImageGallery extends React.Component {

//     render(){
//         return(
//             <ul class="gallery">
//                 <ImageGalleryItem

//                 />
//             </ul>
//         )
//     }
// }
