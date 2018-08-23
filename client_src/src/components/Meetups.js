import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    }
  }

  componentDidMount() {
    this.getMeetups();
  }

  getMeetups() {

    // axios returns a promise, use .then()
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        // set state, callback function to see what is in state
        this.setState({ meetups: response.data }, () => {
          //console.log(this.state);
        })
      }).catch((err) => console.log(err))
  }
  render() {
    // Now that the meetups are in the state, we should be able to access it
    // In the render()
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return(
        <MeetupItem key={meetup.id} item={meetup} />
      )
    });
    return(
      <div>
        <h1>Meetup</h1>
        <p>Below is a listing of web developer meetups in the San Diego area.</p>
        <ul className="collection">
          {meetupItems}
        </ul>
        <footer>
            <p><b>Built with ReactJS, React Routerv4, NodeJS/Express, Loopback API, MongoDB, MaterializeCSS & Atom Editor.</b></p>
        </footer>
      </div>
    )
  }
}

export default Meetups;
