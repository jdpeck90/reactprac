 /* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Jumbotron extends Component {

propTypes: {
        heading: React.propTypes.string,
        text: React.propTypes.string,
        link: React.propTypes.string
      }

static get defaultProps() {
  return {
       heading: 'Welcome!',
       text: "Welcome to our shiny website built with React components",
       link: "http://google.com"
  }
}



  render() {
    return (
        <div>
            <div className="jumbotron">
              <div className="container">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
                <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more &raquo;</a></p>
              </div>
            </div>
      </div>
    );
  }
}

export default Jumbotron;
