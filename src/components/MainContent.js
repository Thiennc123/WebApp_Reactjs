import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import MainContentFeed from './MainContentFeed';

class MainContent extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-5 bg-white mt-5 mb-5 min-vh-100">
          <MainContentFeed/>
      </div>
    );
  }
}

export default MainContent;
