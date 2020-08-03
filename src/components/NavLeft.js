import React, { Component } from 'react';

import ReactDOM from 'react-dom';

class NavLeft extends Component {

 constructor(props) {
    super(props);
    
  }

  render() {
    return (
      
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2  mt-5">
	 		<ul className="main_tab">
				<li className="tab_feeds active" data-ajax ="NUS_Feeds_feeds.html"><a href="{{url('Feeds_Photo')}}">Feed</a></li>
		 		<li className="tab_photo" data-ajax ="NUS_Feeds_photos.html"><a href="{{url('MyPhoto/'.session('data')['id'])}}">My Photo</a></li>
		 		<li className="tab_Album" data-ajax ="NUS_Feeds_feeds.html"><a href="{{url('MyAlbum/'.session('data')['id'])}}">My Album</a></li>

	 		</ul>
	 	</div>
    );
  }
}

export default NavLeft;
