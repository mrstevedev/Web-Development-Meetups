import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component {

  addMeetup(newMeetup){
    // Make post request to backend /api/meetups
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/meetups/',
      data: newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const newMeetup = {
        name: this.refs.name.value,
        city: this.refs.city.value,
        address: this.refs.address.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <br />
        <Link to="/" className="btn black waves-effect">
          <i className="fas fa-chevron-left"></i>
          Go Back
        </Link>
        <h1>Add Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="name">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="name">Address</label>
          </div>
          <input type="submit" value="Save" className="btn black" />
        </form>
      </div>
    )
  }
}

export default AddMeetup;
