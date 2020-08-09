import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import NavLeft from './NavLeft';

import MainContent from './MainContent';

import MainContentFeed from './MainContentFeed';

import MyPhoto from './MyPhoto';

import AddPhoto from './AddPhoto';


import {BrowserRouter as Router, Route, Link, NavLink, Redirect, IndexRoute} from 'react-router-dom';


import Menu from './Menu';

class Body extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
       <Router>
      <div>
        <Menu/>
        <div className="row" style = {{backgroundColor: '#F0EFEF'}}>
          <NavLeft/>
          
              <Route path="/" component={MainContent}/>
              
        
        </div>
      </div>
      </Router>
    );
  }
}

export default Body;
