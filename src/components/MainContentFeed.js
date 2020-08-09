import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';

import MainContentFeedPhoto from './MainContentFeedPhoto';
import MainContentFeedAlbum from './MainContentFeedAlbum';
class MainContentFeed extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
    	<Router>
    	
    	

		<div className="row">
	  		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
		  		<div className="btn-group d-flex justify-content-center mt-3" role="group" aria-label="Basic example">
		  			<NavLink activeClassName="btn-primary" to="/Photo" className="btn btn-muted ">Photo</NavLink>
		  			<NavLink activeClassName="btn-primary" to="/Album" className="btn btn-muted">Album</NavLink>
				</div>
		  		
	  		</div>
	  		
	  	
	  	</div>
	  		
	  		<Switch>
	  			<Route path="/Photo" component={MainContentFeedPhoto}/>
	  			<Route path="/Album" component={MainContentFeedAlbum}/>
	  		</Switch>
	  		
	  			
		
	     
	  	</Router>

	  	
    );
  }
}

export default MainContentFeed;
