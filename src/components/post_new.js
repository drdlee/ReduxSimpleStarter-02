import React, { Component } from 'react';
import { Link } from 'react-router';

class PostNew extends Component {
  render(){
    return (
      <div>
        <h3>Create A New Post</h3>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </div>
    );
  }
}

export default PostNew;
