import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class NavLeft extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
      
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2  mt-5">
	 		<ul className="main_tab">
				<li><NavLink activeClassName="btn-primary" exact to="/Feed" className="btn btn-muted ">Feed</NavLink></li>
		 		<li><NavLink activeClassName="btn-primary" exact to="/MyPhoto" className="btn btn-muted ">MyPhoto</NavLink></li>
		 		<li className="tab_Album" data-ajax ="NUS_Feeds_feeds.html">My Album</li>

	 		</ul>
	 	</div>
    );
  }
}

export default NavLeft;
