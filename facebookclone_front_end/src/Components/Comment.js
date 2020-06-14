import React, { Component } from 'react'
import Reply from './Reply'


export class Comment extends Component {
    theseReplies = this.props.replies.filter(reply => reply.comment_id === this.props.id)
    user = this.props.users.find(user => user.id === this.props.user_id)
    render() {
        return (
            <div className='comment'>
                <span className='commenter-name'>
                  {this.user.first_name} {this.user.last_name}
                </span>
                <p>{this.props.content}</p>
                <button className='add-reply'>Reply</button>
               {this.theseReplies.map(rep => <Reply users={this.props.users} key={rep.id} {...rep} /> )}
            </div>
        )
    }
}

export default Comment
