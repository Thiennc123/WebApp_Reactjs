import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import NavLeft from './NavLeft';

import MainContent from './MainContent';

class Body extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="row" style = {{backgroundColor: '#F0EFEF'}}>
        <NavLeft/>
        <MainContent/>
      </div>
    );
  }
}

export default Body;
