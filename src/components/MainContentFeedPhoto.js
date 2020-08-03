import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class MainContentFeedPhoto extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
       	<div className="row mt-3 justify-content-between">
		
			
		  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" >
		  	<a data-toggle="modal" data-target="#{{$Img->id}}" href="" style={{textDecoration: "none", color: "black"}}>
		  	<div className="card mb-3 " style={{margin: "auto"}}>
			  <div className="row no-gutters" style={{height: 200}}>
			    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 card-img img-responsive thien"  id="cart_img" style={{height: 200}}>
			    	<img src="https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg" className="w-100 h-100"/>
		      
		    	</div>
			    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{backgroundColor: '#F0EFEF', height: 200}}>
			      <div className="card-body" style={{fontSize: 12}}>
			        <h5 className="card-title">kjfs</h5>
			        <p className="card-text">fdsf</p>
			        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			      </div>
			    </div>
			  </div>
			</div>
			</a>
		  </div>

					  
					  
					  
		<div className="modal fade" id="{{$Img->id}}" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
		  <div className="modal-dialog">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="staticBackdropLabel">ads</h5>
		        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div className="modal-body img-responsive" style={{height: 400}}>
		       	<img className="w-100 h-100" src="https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg"/>
		      </div>
		      <div className="modal-footer">
		        
		        <p>dsadsa</p>
		      </div>
		    </div>
		  </div>
		</div>

	</div>
    );
  }
}

export default MainContentFeedPhoto;
