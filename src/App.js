import React from 'react';

import './App.css';

import Menu from './components/Menu';

import Body from './components/Body';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component
{

		constructor(props)
		{
			super(props);
			this.state = {
				photos:[
					{
						id: 1,
						title: "photo1",
						discrit: "day la anh 1",
						link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
					},

					{
						id: 2,
						title: "photo2",
						discrit: "day la anh 2",
						link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
					},
					{
						id: 3,
						title: "photo3",
						discrit: "day la anh 3",
						link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
					}
				]

			}

			
		}
		

	render()
    {
		localStorage.setItem("photos", JSON.stringify(this.state.photos));
    	return (
			<Router>
			    <div className="container-fullwidth">
			    	
			    	<Menu/>

			    	<Body/>
			    </div>
			</Router>
		);
    }
}

export default App;
