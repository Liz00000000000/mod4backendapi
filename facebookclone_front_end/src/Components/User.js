import React, { Component } from 'react'
import Post from './Post'

const User = (props) => {
    let friendsArray = props.friends.filter(friend => friend.user_id_1 === props.id || friend.user_id_2 === props.id)
    let friends = friendsArray.length
        return (
            <div>
                <h1>{props.first_name} {props.last_name}</h1>
                <h2>{props.bio}</h2>
                <h4>Studied at {props.college}</h4>
                <h4>Age {props.age}</h4>
                <h4>Works At {props.occupation}</h4>
                <h4>Likes in {props.location} </h4>
                <h4>{friends} Friends </h4>
                <img src={props.picture} alt={props.first_name}/>
                {props.posts.map(post => <Post key={post.id} {...post} likes={props.likes} comments={props.comments} />)}
            </div>
        )
}

export default User
