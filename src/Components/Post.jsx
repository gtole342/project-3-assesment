import React from "react";

const Post = props =>{
  return(
    <div>
      <h1>Post by {props.userId}</h1>
      <h4>Post # {props.id}</h4>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}
export default Post;