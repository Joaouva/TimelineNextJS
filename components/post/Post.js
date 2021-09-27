import React from 'react'
import  Link  from 'next/link'


function Post(props) {
    const {index, post, openModal} = props;
    

  return (
      <div className="post-item" key={index} onClick={openModal}>
        <h2 className="data-title">{post.title}</h2>
        <h3> id: {post.id}</h3>
        <p className="data-description">{post.body}</p>
        <p className="data-description">{post.date_of_post}</p>
      </div>
   
  ); 
  
   
    
 
}


export default Post
