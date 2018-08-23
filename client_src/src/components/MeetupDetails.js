import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      details: ''
    }
  }

  componentDidMount() {
    this.getMeetup();
  }


  getMeetup() {

    let meetupId = this.props.match.params.id;
    console.log(meetupId);

    // axios returns a promise, use .then()
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        // set state, callback function to see what is in state
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        })
      }).catch((err) => console.log(err))
  }

  onDelete() {
      let meetupId = this.state.details.id;
      axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
        .then(response => {
          this.props.history.push('/');
        }).catch(err => console.log(err));

  }

  render(){
    return(
      <div>
        <br />
        <Link to="/" className="btn black waves-effect">
          <i className="fas fa-chevron-left"></i>
          Go Back
        </Link>
        <h1>{this.state.details.name}</h1>
        <ul className="collection">
          <li className="collection-item"><b>City:</b> {this.state.details.city}</li>
          <li className="collection-item"><b>Address:</b> {this.state.details.address}</li>
        </ul>
        <Link title={`Edit ${this.state.details.name}`} className="btn blue darken-3" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
        <button title={`Delete ${this.state.details.name}`} className="btn red darken-3 right" onClick={this.onDelete.bind(this)}>Delete</button>
      </div>
    )
  }
}

export default MeetupDetails;
