import React, { Component } from 'react';

import ReactDOM from 'react-dom';


import {connect} from 'react-redux';

import * as Actions from '../Redux/action';

import { withRouter } from "react-router-dom";

import axios from 'axios';

import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';


class Register extends Component {

 constructor(props) {
    super(props);
    this.state = {
            userName:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPass:'',
            
        }

      this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e,props){
  	e.preventDefault();
  	var connect = this.props;
  	axios.post('http://127.0.0.1:8000/api/auth/signup', {
  		 
		    userName:this.state.userName,
		    firstName:this.state.firstName,
		    lastName:this.state.lastName,
		    email:this.state.email,
		    password:this.state.password,
		    confirmPass:this.state.confirmPass,
		   }
		  // headers: {
			 //   Authorization: 'Bearer ' //the token is a variable which holds the token
			 // }
		  )
		  .then(function (response) {
		    connect.history.push("/Login");
		  })
		  .catch(function (error) {
		    alert(error);
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

    		<div style={{textAlign:"center", fontSize: 35,fontFamily: "Arial, Roboto, 'Times New Roman'", color: "#1929A0"}}> Fotobook Signup
	 		</div>
	 		<div style={{backgroundColor: "#E1E1E1"}}>
	 			<form className="p-4">
	 				<div className="form-group">
					    <label>User Name</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleInputUserName" 
					    	placeholder="Enter UserName" 
					    	name = "userName"
					    	value = {this.state.userName}
					    	onChange = {this.onChange}
					    	required
					    	
					    />
					  </div>
					  <div className="form-group">
					    <label>First Name</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleInputFirstName" 
					    	placeholder="Enter First" 
					    	name = "firstName"
					    	value = {this.state.firstName}
					    	onChange={this.onChange}
					    	required
					    />
					    
					  </div>
					  <div className="form-group">
					    <label>Last Name</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleInputLastName" 
					    	placeholder="Enter Last Name" 
					    	name="lastName"
					    	value = {this.state.lastName}
					    	onChange={this.onChange}
					    	required
					    />
					    
					  </div>
					  <div className="form-group">
					    <label>Email</label>
					    <input 
					    	type="email" 
					    	className="form-control" 
					    	id="exampleInputEmail" 
					    	placeholder="Enter Email" 
					    	name="email"
					    	value = {this.state.email}
					    	onChange={this.onChange}
					    	required
					    />
					    
					  </div>
					  <div className="form-group">
					    <label> Password</label>
					    <input 
					    	type="password" 
					    	className="form-control" 
					    	id="exampleInputPassword1" 
					    	placeholder="Password" 
					    	name="password"
					    	value={this.state.password}
					    	onChange={this.onChange}
					    	required
					    />
					    
					  </div>
					  <div className="form-group">
					    <label>Confirmation Password</label>
					    <input 
					    	type="password" 
					    	className="form-control" 
					    	id="exampleInputPassword2" 
					    	placeholder="Confirmation Password" 
					    	name="confirmPass"
					    	value={this.state.confirmPass}
					    	onChange={this.onChange}
					    	required
					    />
					    
					  </div>

					  
					  

					  
					  <div className="d-flex justify-content-center">
					  	<button onClick={this.onSubmit} className="btn btn-success">Register</button>
					  </div>
					 
					</form>
	 		</div>
	 	</div>

	 </div>
</div>
    );
  }
}


export default withRouter(Register);


