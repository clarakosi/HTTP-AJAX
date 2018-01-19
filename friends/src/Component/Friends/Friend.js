import React from 'react';
import './Friend.css';


const Friends = (props) => {


        return (
            <div>
                <div className="friends">
                    {props.friends.map((friend) => {
                        return <div className="friends--card"key={friend.id}>
                            <div>name: {friend.name}</div>
                            <div>age: {friend.age}</div>
                            <div>email: {friend.email}</div>
                            <button onClick={() => props.delete(friend.id)}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        );

}

export default Friends;