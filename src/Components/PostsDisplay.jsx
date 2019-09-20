import axios from "axios";
import React from "react";
import Post from "./Post";
import Nav from "./Nav";

class PostsDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: props.currentUser,
      posts: [],
    }
  }

  nextUser = (e) => {
    e.preventDefault()
    this.setState({
      currentUser: this.state.currentUser + 1
    })
  }
  previousUser = (e) => {
    e.preventDefault()
    if (this.state.currentUser > 1){
      this.setState({
        currentUser: this.state.currentUser - 1
      })
    }
  }

  getPosts = () =>{
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.currentUser}`)
    .then((response) => {
      this.setState({ posts: response.data });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount(){
    this.getPosts()
  }
  componentDidUpdate(){
    this.getPosts()
  }

  render(){
    const posts = this.state.posts.map((post) => {
      return <Post userId={post.userId} 
                   key={post.id} 
                   id={post.id}
                   title={post.title} 
                   body={post.body} 
             />
    })
    return(
      <div>
        <Nav nextUser={this.nextUser} previousUser={this.previousUser}/>
        {posts}
      </div>
    );
  }
}

export default PostsDisplay;