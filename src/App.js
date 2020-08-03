import React from 'react';

import './App.css';

import Menu from './components/Menu';

import Body from './components/Body';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
  	<Router>
	    <div className="container-fullwidth">
	    	
	    	<Menu/>

	    	<Body/>
	    </div>
    </Router>
  );
}

export default App;
