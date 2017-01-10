 /* eslint-disable */
import React, { Component } from 'react';

class Navbar extends Component {
      propTypes: {
        brand: React.propTypes.string.isRequired
      }
static get defaultProps() {
  return {
       brand: 'Some Fancy Name!',
       color: 'light'
  }
}
  render() {
    if(this.props.color == 'dark'){
      var navClass = 'nav navbar-inverse';
    } else {
      var navClass = 'nav navbar-default';
    }

    var homeActive = ' ';
    var aboutActive = ' ';

    if(this.props.page == 'home'){
      homeActive = 'active';
    } else if (this.props.page =='about') {
      aboutActive = 'active';
    }

    return(
            <div>
                <nav className={navClass}>
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="http://www.google.com">{this.props.brand}</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li className={homeActive}><a onClick={this.props.homeClick} href="#">Home</a></li>
                        <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
          )
  }


}


export default Navbar;
