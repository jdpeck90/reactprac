 /* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import PageHome from './PageHome';
import PageAbout from './PageAbout';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super();
   this.state = { page: 'home' };

  }
  handleHomeClick = () => {
      this.setState({
        page: 'home'

      })
      console.log('homeClick')
  }
   handleAboutClick = () => {
     this.setState({
        page: 'about'
      })
     console.log('aboutClick')
  }
  render() {
    if(this.state.page === 'home' ){
      var jumbotron = <Jumbotron />
      var page = <PageHome />
    } else if (this.state.page === 'about'){
       jumbotron = ' ';
       page = <PageAbout />
    }


    return (
        <div>
        <div>
          <Navbar
          color="dark"
          page={this.state.page}
          homeClick={this.handleHomeClick}
          aboutClick={this.handleAboutClick}
          onClick={this.props.homeClick} />
          {jumbotron}
          {page}
          <Footer />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
