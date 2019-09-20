import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import PostsDisplay from "./Components/PostsDisplay";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      currentUser: 1,
    }
  }
  
  render(){
    return (
      <div className="App">
        <PostsDisplay currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
