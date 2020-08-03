import React, { Component } from 'react';

// import ReactDOM from 'react-dom';

import ItemPhoto from './ItemPhoto';

class MainContentFeedPhoto extends Component {

 constructor(props){
 	  super(props);
	  this.state = {
	      photos: []
	  };
}

	componentWillMount()
	{
		let dataFromStogare = JSON.parse(localStorage.getItem('photos'));

		this.setState({
			photos: dataFromStogare,
		});
	}

  render() {
  	var photos = this.state.photos.map((photo, index)=>{
  		return <ItemPhoto
  				key={photo.id} 
  				title = {photo.title}
  				discript = {photo.discript}
  				link = {photo.link} 
  			/>
  	});
    return (
       	<div className="row mt-3 justify-content-between">
		
		
					  
       	{photos}


					  
					  
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
