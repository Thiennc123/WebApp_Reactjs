import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Login from './Login';

import Register from './Register';

import {connect} from 'react-redux';

import * as Actions from '../Redux/action';


import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class Authentication extends Component {

 constructor(props) {
    super(props);
    this.state = {
            
        }
  }



  

  render() {
    return (
    	<div className="container-fullwidth">
		
		<div className="menu d-inline ">
			<div className="row" style={{backgroundColor:"#1929A0", color: "white"}}>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 offset-xl-1 align-items-center">
					<a className="navbar-brand ml-20 pl-5 signup_title">Fotobook</a>
				</div>

				<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 mt-2 align-items-center">
					<form className="form-inline">
						<input className="form-control w-75 ml-3" type="search" placeholder="Search Photo/Album" aria-label="Search"/>
					</form>
				</div>

				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 align-items-center">
					<p className="navbar-brand ml-20  signup_title mt-3" style={{fontSize: 15}}></p>
				</div>

				

				

			</div>

		</div>
		
	 <div className="row justify-content-center">
	 	<div className="col-sm-12 col-md-8 col-lg-5 col-xl-4 mt-5">
	 		<Router>
		         <Route path = "/Login" component = {Login} />
		         <Route path = "/Register" component = {Register} />
		    </Router>
	 	</div>
	 	

	 </div>
</div>

    );
  }
}


export default Authentication;


