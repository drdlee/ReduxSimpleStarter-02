import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';

class PostIndex extends Component {
  componentWillMount(){
    console.log(this.props.fetchPosts());  // remember the Action is returning a Promise
}

  render(){
    return (
      <div>
        Post Index
        <Link to="/post/new" className="btn btn-primary pull-xs-right">Add New Post</Link>
      </div>
    );
  }
}

export default connect (null, { fetchPosts })(PostIndex);
