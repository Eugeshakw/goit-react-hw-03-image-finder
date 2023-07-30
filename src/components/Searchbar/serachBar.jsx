import React from 'react';

export default class Searchbar extends React.Component {
  state = {
    searchquery: '',
  };


  onSubmitForm = event => {
    event.preventDefault();
    if (this.state.searchquery.trim() === ''){
        alert('Please enter')
          return 
       }
    this.props.onSubmit(this.state.searchquery);
    this.setState({ searchquery: '' });

  }

  onFormChange = event => {
    this.setState({ searchquery: event.currentTarget.value.toLowerCase() });
  }
   
  

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onFormChange}
            value={this.state.searchquery}
          />
        </form>
      </header>
    );
  }
}
