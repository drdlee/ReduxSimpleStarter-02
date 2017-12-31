import React, { Component } from 'react';
import { Link } from 'react-router';

class PostNew extends Component {
  render(){
    return (
      <div>
        <h3>Create A New Post</h3>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default PostNew;
