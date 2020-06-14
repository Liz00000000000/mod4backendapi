import React, { Component } from 'react'
import Comment from './Comment'

const Post = (props) => {
    let likesArray = props.likes.filter(like => like.post_id === props.id )
    let likes = likesArray.length + ' Likes <3'
    let user = props.users.find(user => user.id === props.user_id )
    let randomMonth = parseInt(Math.random() * (12 - 1) + 1);
    let randomYear = parseInt(Math.random() * (2016 - 1980) + 1980)
        return (
            <div className='post'>
                <div className='user-container'>
                    <img src={user.picture} alt={user.first_name}/>
                    <span className='post-user-name'>{user.first_name} {user.last_name}</span>
                    <span className='post-date'> {randomMonth}/ {randomYear}</span>
                </div>
                <p>{props.caption}</p>
                <div className='post-interaction-container'>
                    <div className='btns-container'> 
                    <button className='add-like'> <i className='fad fa-heart'/>Like</button>
                    <button className='add-comment' onClick={props.commentAdd} > Add Comment</button>
                    </div>
                    <div className='likes-container'>
                        <span className='like-count'>{likesArray ? likes : null }</span>
                    </div>
                </div>
                <div className='comment-container'>
                {props.comments ? props.comments.map(comment =>  <Comment users={props.users} replies={props.replies} key={comment.id} {...comment} /> ) : null }
                </div>
            </div>
        )
}

export default Post