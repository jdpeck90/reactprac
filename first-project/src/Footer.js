 /* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Footer extends Component {
  propTypes: {
    brand: React.propTypes.string
  }
  static get defaultProps() {
    return {
       website: 'WE DA BEST! ',
       copy_year: 2016

    }
  }
  render() {
    return (
        <div className="container">
            <hr />
           <footer>
              <p>&copy; {this.props.copy_year} {this.props.website}, Inc.</p>
          </footer>
        </div>
    );
  }
}

export default Footer;
