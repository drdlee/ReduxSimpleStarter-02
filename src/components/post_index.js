import React, { Component } from 'react';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';
import { connect } from 'react-redux';

class PostIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
}

  renderPosts(){
    return this.props.posts.map((post) => {
      return (
          <li key={post.id} className="list-group-item">
            <Link to={`/post/${post.id}`}>
              <span className="pull-xs-right">{post.categories}</span>
              <strong>{post.title}</strong>
            </Link>
          </li>
      )
    })
  }

  render(){
    return (
      <div>
        Post Index
        <div className="pull-xs-right">
          <Link to="/post/new" className="btn btn-primary">Add New Post</Link>
        </div>
        <h3>List of all posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all }
}

export default connect (mapStateToProps, { fetchPosts })(PostIndex);
