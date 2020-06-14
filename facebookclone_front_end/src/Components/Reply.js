import React, { Component } from 'react'

const Reply = (props) =>{
    let user = props.users.find(user => user.id === props.user_id)
     return (
         <div>
             <div className='reply-container'>
                 <div className='replier-name'>
                    {user.first_name} {user.last_name} 
                 </div>
                 {props.content}
             </div>
         </div>
     )
}

export default Reply