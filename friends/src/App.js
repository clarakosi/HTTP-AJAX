import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Friends from './Component/Friends/Friend';
import FriendForm from './Component/Friends/FriendForm';

class App extends Component {

  state = {
    friends: [],
    error: null,
}

  loadFriends = () => {
      const target = "http://localhost:5000/friends"

      axios
      .get(target)
      .then(response => {this.setState({friends: response.data})})
      .catch(error => {this.setState({error: error})})
  }

  deleteFriend = (id) => {
    const endpoint = `http://localhost:5000/friends/${id}`
    axios
    .delete(endpoint)
    .then(response => {
      this.loadFriends();
    })
    .catch(error => {
      this.setState({error: 'Failed to delete friend'})
    })
  }

  componentDidMount() {
    this.loadFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>List of Friends</h1>
        <Friends friends={this.state.friends} delete={this.deleteFriend}/>
        <FriendForm refresh={this.loadFriends}/>
      </div>
    );
  }
}

export default App;
