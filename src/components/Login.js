import React, { Component } from 'react';

import ReactDOM from 'react-dom';


import {connect} from 'react-redux';

import * as Actions from '../Redux/action';
import { withRouter } from "react-router-dom";
import Menu from './Menu';

import Body from './Body';
import axios from 'axios';

import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';


class Login extends Component {

 constructor(props) {
    super(props);
    this.state = {
          
            email:'',
            password:'',
            
    }

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e,props){
  	e.preventDefault();
  	var connect = this.props;
  	axios.post('http://127.0.0.1:8000/api/auth/login', {
		    email:this.state.email,
		    password:this.state.password,
		    
		   }
		  // headers: {
			 //   Authorization: 'Bearer ' //the token is a variable which holds the token
			 // }
		  )
		  .then(function (response) {
		  	
		  	localStorage.setItem("token", JSON.stringify(response.data.access_token));
		    connect.history.push("/");
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  }


  onChange = (event) =>{

  	var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
  	
  } 

  

  render() {
    return (
    	<div>

    		<div className="menu d-inline ">
		      <div className="row" style={{backgroundColor: '#1929A0', color: 'white'}}>
		        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 offset-md-1 offset-sm-1 offset-lg-1 offset-xl-1 align-items-center">
		          <a className="navbar-brand ml-20 pl-5 signup_title">Fotobook</a>
		        </div>

		        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 mt-2 align-items-center">
		          <form className="form-inline">
		            <input className="form-control w-75 ml-3" type="search" placeholder="Search Photo/Album" aria-label="Search"/>
		          </form>
		        </div>

		        

		        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 align-items-center d-inline">
		          


		          {/*<img src="https://i.a4vn.com/2019/1/26/tuyen-tap-nhung-hinh-anh-gai-dep-nam-2019-gay-nhieu-chu-y-cua-co-111998.png" style={{width:30, height:30}} className="rounded-circle"/>

		          
		          <p className="navbar-brand ml-20  signup_title mt-3" style={{fontSize:15}}>Hello Hello</p>*/}
		        </div>

		        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 align-items-center">
		          
		        </div>
		      </div>

		    </div>




	<div className="row justify-content-center">
	 	<div className="col-sm-12 col-md-8 col-lg-5 col-xl-4 mt-5">
    		<div className="row">

	 			<div style= {{textAlign: "center", fontSize: 35,fontFamily: "Arial, Roboto, 'Times New Roman'", color:"#1929A0"}} className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> Fotobook Login
	 			</div>
	 		</div>
	 		
	 		
	 		<div style={{backgroundColor: "#E1E1E1"}}>
				<div className=" pt-5 d-flex justify-content-center">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwcJ6SdMb4PjPEVJsOLa798_0BzbeglCUHSg&usqp=CAU" className="d-flex justify-content-center rounded-circle " style={{width: 100}}/>
				</div>
				<div>
					<form className="p-4" id="form_signup">
						
					  <div className="form-group">
					    <label >Email</label>
					    <input 
					    	type="email" 
					    	className="form-control" 
					    	id="exampleInputEmail"
					    	placeholder="Enter Email" 
					    	name="email"
					    	value = {this.state.email}
					    	onChange = {this.onChange}
					    	required
					    />
					    

					  </div>
					  <div className="form-group">
					    <label>Password</label>
					    <input 
					    	type="password" 
					    	className="form-control" 
					    	id="exampleInputPassword1" 
					    	placeholder="Password" 
					    	name="password"
					    	value = {this.state.password}
					    	onChange = {this.onChange}
					    	required
					    />
					    
					  </div>

					

						
					  <div className="d-flex justify-content-center">
					  	<button onClick={this.onSubmit}>Login</button>
					  </div>
					 
					</form>
					
					
				</div>
	 			
	 		</div>
	 		</div>

	 		</div>
	 	

	 </div>
    );
  }
}


export default withRouter(Login);


