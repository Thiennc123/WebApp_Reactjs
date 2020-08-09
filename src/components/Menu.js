import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class Menu extends Component {

 constructor(props) {
    super(props);
    
  }



  render() {
      let dataFromStogare = JSON.parse(localStorage.getItem('token'));

      
    return (
      
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

          <NavLink  style={{fontSize:15}}  to="/Login" className="navbar-brand ml-20  signup_title mt-3">Logout</NavLink>
        </div>
      </div>

    </div>
    
    );
  }
}

export default Menu;
