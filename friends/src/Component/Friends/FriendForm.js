import React, { Component } from 'react';
import axios from 'axios';

export default class FriendForm extends Component {
    state = {
            name: '',
            age: '',
            email: ''
    }

    handleInputChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target;
        // const newFriend = this.state.newFriend;
        // newFriend[name]= value;
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        console.log(this.state)
        axios.post('http://localhost:5000/friends', this.state).then((response) => {
            this.props.refresh();
            this.setState({name: '', age: '', email: ''});
        })
        .catch(() => {console.error('Could not create the friend')})

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" value={this.state.age} onChange={this.handleInputChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}