import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class MainContentFeedAlbum extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
       	<div className="row mt-3 justify-content-between">
		
				
		  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
		  	<a data-toggle="modal" data-target="#1" href="" style={{textDecoration: "none", color: "black"}}>
		  	<div className="card mb-3 " style={{margin: "auto"}}>
			  <div className="row no-gutters" style={{height:200}} >
			    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 card-img img-responsive thien"  id="cart_img" style={{height:200}}>
			    	<img src="https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg" className="h-100 w-100"/>
		      
		    </div>
			    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6" style={{backgroundColor: '#F0EFEF', height: 200}}>
			      <div className="card-body" style={{fontSize: 12}}>
			        <h5 className="card-title">dfds</h5>
			        <p className="card-text">fsd</p>
			        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
			      </div>
			    </div>
			  </div>
			</div>
			</a>
		  </div>
					  
					  

<div className="modal fade" id="1" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">fsdfds</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body img-responsive h-100">
       	<div id="carousel1" className="carousel slide" data-ride="carousel">
		  <div className="carousel-inner" style={{height: 400}}>
		  	
			<div className="active" style={{height: 400}}>
      			<img className="d-block w-100" src="https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg" alt="First slide" style={{objectFit: 'cover'}}/>
    		</div>

    		<div className="active" style={{height: 400}}>
      			<img className="d-block w-100" src="https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg" alt="First slide" style={{objectFit: 'cover'}}/>
    		</div>
			
		   
		  </div>
		  <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="sr-only">Previous</span>
		  </a>
		  <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="sr-only">Next</span>
		  </a>

		</div>
		
      </div>
      <div className="modal-footer">
        
        <p></p>
      </div>
    </div>
  </div>
</div>
				

	</div>
    );
  }
}

export default MainContentFeedAlbum;

