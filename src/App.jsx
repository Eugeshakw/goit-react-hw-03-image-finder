import React from 'react';
import Searchbar from './components/Searchbar/serachBar';
import ImageGallery from './components/ImageGallery/ImageGallery'
import { getPhotosByQuery } from './api/api.js';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem'

export class App extends React.Component {
  state = {
    images: [],
    image: null,
    page: 1,
    searchquery: '',

  };

  handleFormSubmit = searchquery => {
   this.setState({
    searchquery: searchquery,
    page: 1,
    images:[]

  });
   
  
  }

  fetchImages = async () => {
    const {searchquery, page} = this.state;
    const photos = await  getPhotosByQuery(searchquery, page)
    
    this.setState(prevState => ({
      images: [...prevState.images, ...photos.hits],
      page: prevState.page + 1,
    }))
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.searchquery !== this.state.searchquery) {
      this.fetchImages()
    }
  }
  // componentDidMount() {
  //   this.handleImage()
  // }

  // handleImage = async () => {
  //  const data = await getPhotosByQuery()
    
  //  console.log(data);
  // }
  

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery photos={this.state.images}/>
      </>
    );
  }
}

// export const App = () => {

// };
