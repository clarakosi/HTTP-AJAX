import React, { Component } from 'react';
import axios from 'axios';

import './Friend.css';


class Friends extends Component {
    state = {
        friends: [],
        error: null,
        name: undefined,
        age: undefined,
        email: undefined,
        data: {
            name: null,
            age: null,
            email: null,
        }
    }

    componentDidMount() {
        const target = "http://localhost:5000/friends"
        // const data = { 
        //     name: this.state.name, 
        //     age: this.state.age, 
        //     email: this.state.email,
        // }

        axios
        .get(target)
        .then(response => {this.setState({friends: response.data})})
        .catch(error => {this.setState({error: error})})

        if(this.state.data.name !== null) {
            axios
            .post(target, this.state.data)
            .then(response => {this.setState( console.log(response))})
            .catch(error => {console.log(error)})
        }

    }

    UpdateName = (event) => {
        this.setState({name: event.target.value})
    }

    UpdateAge = (event) => {
        this.setState({age: event.target.value})

    }

    UpdateEmail = (event) => {
        this.setState({email: event.target.value})

    }

    SubmitFriend = (event) => {
        event.preventDefault();
       this.setState({
           data: {
               name: this.state.name,
               age: this.state.age,
               email: this.state.email
           }
       })
    }

    render() {
        return (
            <div>
                <div className="friends">
                    {this.state.friends.map((friend) => {
                        return <div className="friends--card"key={friend.id}>
                            <div>name: {friend.name}</div>
                            <div>age: {friend.age}</div>
                            <div>email: {friend.email}</div>
                        </div>
                    })}
                </div>
                <form>
                    Name: 
                    <input type="text" value={this.state.name} onChange={this.UpdateName} />
                    <br/>
                    Age:
                    <input type="number" value={this.state.age} onChange={this.UpdateAge} />
                    <br/>
                    Email: 
                    <input type="email" value={this.state.email} onChange={this.UpdateEmail} />
                    <button onSubmit={this.SubmitFriend}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Friends;