import React, { Component } from 'react';
import Books from './book';
import Header from './header';

// const handleSaveToPC = (jsonData, filename) => {
//  const fileData = JSON.stringify(jsonData);
//  const blob = new Blob([fileData], { type: "text/plain" });
//  const url = URL.createObjectURL(blob);
//  const link = document.createElement('a');
//  link.download = `${filename}.json`;
//  link.href = url;
//  link.click();
// }

class Home extends Component{
state = {
 rating: 0,
 modal:false
}
toggleModal = () => {
 this.setState({modal: !this.state.modal})
}
 
 changeingRating = (newRating,name) => {
  this.setState({rating: newRating})
 }
 render() {
  const {rating:newRating } = this.state;

  return (
   <div className="home-page">
    <Header />
    <section className="Home-container">
     <Books
      changeingRating={this.changeingRating}
      rating={newRating}
      title={localStorage.getItem('title')}
      desc={localStorage.getItem('desc')}
      toggle={this.toggleModal}/>
    </section>
   </div>
 )
}
}
export default Home;