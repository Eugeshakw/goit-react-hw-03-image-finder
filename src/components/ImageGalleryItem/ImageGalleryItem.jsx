import React from 'react';

const ImageGalleryItem = ({src,alt, largeImageURL, onClick}) => {
  return (
    <li className="gallery-item">
      <img 
      src={src} 
      alt={alt}
      onClick={()=>{
        onClick(largeImageURL)
      }} 
      />
    </li>
  );
};
export default ImageGalleryItem;
// export default class ImageGalleryItem extends React.Component {

//  componentDidMount() {

//  }
//   render() {

//     return (
//       <li className="gallery-item">
//         <img src='' alt='' />

//       </li>
//     );
//   }
// }
