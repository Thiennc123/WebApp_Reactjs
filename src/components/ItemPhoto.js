import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class ItemPhoto extends Component {

 

  render() {
  	var {title, discript, link} = this.props;
    return (
       
	<div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" >
		  	<a data-toggle="modal" data-target="#{{$Img->id}}" href="" style={{textDecoration: "none", color: "black"}}>
		  	<div className="card mb-3 " style={{margin: "auto"}}>
			  <div className="row no-gutters" style={{height: 200}}>
			    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 card-img img-responsive thien"  id="cart_img" style={{height: 200}}>
			    	<img src={link} className="w-100 h-100"/>
		      
		    	</div>
			    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{backgroundColor: '#F0EFEF', height: 200}}>
			      <div className="card-body" style={{fontSize: 12}}>
			        <h5 className="card-title">{title}</h5>
			        <p className="card-text">{discript}</p>
			        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			      </div>
			    </div>
			  </div>
			</div>
			</a>
		  </div>			  
		
    );
  }
}

export default ItemPhoto;
