import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';

class PostIndex extends Component {
  componentWillMount(){
    this.props.fetchPost();
  }
  renderPosts(){
    return this.props.posts.map((post)=>{
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    })
  }

  render(){
    return (
      <div>Post Index
        <Link to="/post/new" className="btn btn-primary pull-xs-right">Add New Post</Link>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all
  }
}

export default connect (mapStateToProps, { fetchPost }) (PostIndex);
