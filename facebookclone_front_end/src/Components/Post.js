import React, { Component } from 'react'
import Comment from './Comment'

const Post = (props) => {
    let likesArray = props.likes.filter(like => like.post_id === props.id )
    let likes = likesArray.length + ' Likes <3'
        return (
            <div>
                <p>{props.caption}</p>
                <p>{likesArray ? likes : null } </p>
                {props.comments ? props.comments.map(comment =>  <Comment key={comment.id} {...comment} /> ) : null }
            </div>
        )
}

export default Post