import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MeetupItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: props.item
    }
  }
  render(){
    return(
        <Link className="collection-item" to={`/meetups/${this.state.item.id}`}>
          {this.state.item.name}
        </Link>
    )
  }
}

export default MeetupItem;
