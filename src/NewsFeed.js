import React, { Component } from 'react';
import Post from './Post.js'
import './qpaweb.css'

class NewsFeed extends Component {
  constructor(){
    super();
    this.state = {
      posts: null,
    }
  }

  componentDidMount(){
    //fetch('https://qpa.sch.bme.hu/api/news')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        this.setState({posts: json});
      });
  }

  render(){
    var postItems = []
    if (this.state.posts) {
      for (var i = 0; i<this.state.posts.length; i++){
        postItems.push(<Post key={i} title={this.state.posts[i].title} text={this.state.posts[i].body} /> )
      }
    }
    return (
      <div id="content" className="content">
        {postItems}
      </div>
    );
  }
}

export default NewsFeed;
