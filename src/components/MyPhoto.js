import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class MyPhoto extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
    	<div>
      <div className="row">
  		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
	  		<div className="btn-group d-flex justify-content-end mt-3" role="group" aria-label="Basic example">
			  <NavLink exact to="/AddPhoto" className="btn btn-success ">New Photo</NavLink>
			  
			</div>
	  		
  		</div>
  	</div>
	<hr/>
	<div className="row mt-3 justify-content-start">
		
		  <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 img-responsive mt-3 justify-content-center">
		  	<div style={{position: "relative",height: 200}}>
		  		<img src="{{ asset($listImgForUser->link) }}" className="w-100 h-100"/>
			  	<div className="child bg-secondary flex-parent w-100" id="test" style={{position: "absolute", top: 0, left: 0,opacity:0.5}}>
			  		<p className="flex-child long-and-truncated" >fdsf</p>
			  		<a href="{{url('EditImage/'.$listImgForUser->id)}}" style={{color: "white"}}><i className="far fa-edit flex-child short-and-fixed"></i></a>
			  		
			  	</div>
		  	</div>
		  	
		  </div>

		  
		
		  
	 </div>
	 </div>
    );
  }
}

export default MyPhoto;
