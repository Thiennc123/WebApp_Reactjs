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
				<li><NavLink activeClassName="btn-primary"  to="/Feed" className="btn btn-muted ">Feed</NavLink></li>
		 		<li><NavLink activeClassName="btn-primary"  to="/MyPhoto" className="btn btn-muted ">MyPhoto</NavLink></li>
        <li><NavLink activeClassName="btn-primary"  to="/MyAlbum" className="btn btn-muted ">MyAlbum</NavLink></li>

	 		</ul>
	 	</div>
    );
  }
}

export default NavLeft;
