import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div>
      <nav className="blue darken-3">
       <div className="nav-wrapper">
         <a href="/" className="brand-logo">Web Developer Meetups</a>
         <a
           data-target="main-menu"
           className="sidenav-trigger show-on-large">
           <i className="fa fa-bars"></i></a>
         <ul className="right hide-on-small-only">
           <li>
             <Link to="/">
              <i className="fa fa-users">
              <span className="font-nav">Meetups</span>
              </i>
             </Link>
           </li>
         </ul>
       </div>
      </nav>

      <ul className="sidenav" id="main-menu">
        <li>
             <Link to="/">
              <i className="fa fa-users">
                <span className="font-nav">Meetupz</span>
              </i>
             </Link>
           </li>
           <li>
             <Link to="/meetups/add">
              <i className="fa fa-plus">
                <span className="font-nav">Add Meetup</span>
              </i>
             </Link>
           </li>
           <li>
             <Link to="/about">
              <i className="fa fa-question-circle">
                <span className="font-nav">About</span>
              </i>
             </Link>
           </li>
      </ul>
      </div>

    )
  }
}

export default Navbar;
