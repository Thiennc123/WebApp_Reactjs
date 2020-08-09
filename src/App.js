import React from 'react';

import './App.css';

import Menu from './components/Menu';

import Body from './components/Body';
import Login from './components/Login';

import MainContentFeed from './components/MainContentFeed';
import MainContent from './components/MainContentFeed';

import Register from './components/Register';

import Authentication from './components/Authentication';


import NavLeft from './components/NavLeft';

import MainContentFeedPhoto from './components/MainContentFeedPhoto';
import MainContentFeedAlbum from './components/MainContentFeedAlbum';



import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

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
						state:"Public",
						link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
					},

					{
						id: 2,
						title: "photo2",
						discrit: "day la anh 2",
						state:"Public",
						link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
					},
					{
						id: 3,
						title: "photo3",
						discrit: "day la anh 3",
						state:"Private",
						link:'https://anhnendep.net/wp-content/uploads/2018/10/anh-gai-dep-diu-dang-8.jpg'
					}
				]

			}

			
		}
		

	render()
    {
		
    	return (
			<Router>
			    <div className="container-fullwidth">
   
			    		
				          
				       <Switch>
			    		<Route path="/Login" component={Login}/>
			    		<Route path = "/Register" component = {Register} />
			    		<Route path="/" component={Body}/>
			    		</Switch>
			    </div>
			   
			</Router>



		);
    }
}

export default App;
