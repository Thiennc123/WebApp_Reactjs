import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import MainContentFeed from './MainContentFeed';

import MyPhoto from './MyPhoto';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class MainContent extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
	    
			<div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-5 bg-white mt-5 mb-5 min-vh-100">
			 	<Route path="/Feed" component={MainContentFeed}/>
	  			<Route path="/MyPhoto" component={MyPhoto}/>
			</div>
			
			
	   
    );
  }
}

export default MainContent;
