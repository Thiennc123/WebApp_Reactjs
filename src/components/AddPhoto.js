import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import $ from 'jquery';


class AddPhoto extends Component {

 constructor(props) {
    super(props);
    
  }
  render() {
    return (
    	<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5 bg-white mt-5 mb-5">
	
			  	<div className="row">
			  		<div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
				  		<div className="btn-group d-flex justify-content-start mt-3" role="group" aria-label="Basic example">
						  <span className="label">New Photo</span>
						  
						</div>
				  		
			  		</div>
			  	</div>
				<hr/>
				
						  
					  <form method="POST" action="{{url('AddPhoto/'.session('data')['id'])}}">
					  	
						  <div className="form-row">
						    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-block">
						    	<label className="col-form-label">Title</label>
						     	<input type="text" className="form-control" placeholder="Photo title " name="title"/>
						     	<label  className="mt-3">State</label>
							      <select id="input" className="form-control w-50" name="status" defaultValue={'Public'}>
							        <option value="Public">Public</option>
							        <option value="Private">Private</option>
							      </select>
							    

								 <div className="mt-5 col-12">
	                                <div className="file-loading">
	                                    <input id="file-1" type="file" name="file[]" multiple className="file" data-overwrite-initial="false" data-min-file-count="1"/>
	                                </div>
	                            </div>
						    </div>
						    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
						    	<label  className=" col-form-label">Description</label>
						      	<textarea className="form-control" rows="5" id="comment" placeholder="Photo description" name="discript"></textarea>
						    </div>
						    <input type="submit" className="bg-success btn btn-success mt-5"/>
						  </div>
						</form>

						
					  
	  	

		</div>

		

    );
  }
}



export default AddPhoto;
