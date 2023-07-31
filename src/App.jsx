import React from 'react';
import Searchbar from './components/Searchbar/serachBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/buttonLoadmore';
import Modal from './components/Modal/modalImg';
import { getPhotosByQuery } from './api/api.js';
import { ProgressBar } from 'react-loader-spinner';

export class App extends React.Component {
  state = {
    images: [],
    image: null,
    page: 1,
    searchquery: '',
    isloading: false,
    showModal: false,
    largeImageUrl: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = searchquery => {
    if(this.state.searchquery === searchquery){
      return alert(`вы уже просматриваете ${searchquery}`)
    }

    this.setState({
      searchquery: searchquery.toLowerCase(),
      page: 1,
      images: [],
      isloading: true,
    });
    console.log(this.state.page);
  };
 
  fetchImages = async () => {
    const { searchquery, page } = this.state;
    const photos = await getPhotosByQuery(searchquery, page);
   
    this.setState(prevState => ({
      images: [...prevState.images, ...photos.hits],
      page: prevState.page + 1,
      isloading: false,
    }));
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchquery !== this.state.searchquery) {
      try{
        this.fetchImages();
        console.log('try');
        
       
       
      } catch(err){
       console.log('error')
        
      }
      
    }
  }

  handleImageClick = largeImageUrl => {
    this.setState({ largeImageUrl });
    this.toggleModal();
  };

  onClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isloading && (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
            isloading={this.state.isloading}
          />
        )}

        <ImageGallery
          photos={this.state.images}
          onClick={this.handleImageClick}
        />
        {showModal && (
          <Modal
            onClose={this.onClose}
            largeImageUrl={this.state.largeImageUrl}
          />
        )}
        {this.state.images.length > 0 && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}
