import React, { Component } from 'react';
import { Link } from 'react-router';

class PostIndex extends Component {
  render(){
    return (
      <div>
        Post Index
        <Link to="/post/new" className="btn btn-primary pull-xs-right">Add New Post</Link>
      </div>
    );
  }
}

export default PostIndex;
