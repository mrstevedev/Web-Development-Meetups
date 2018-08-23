import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
return(
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn btn-floating btn-large black">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  </div>
)
}

export default App;
