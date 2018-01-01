import React, { Component } from 'react';
import { fetchSingle, deletePost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types'

class PostShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.fetchSingle(this.props.params.id);
  }
  handleDelete(){
    this.props.deletePost(this.props.params.id)
    .then(()=>{
      this.context.router.push('/');
    })
  }
  render(){
    if(!this.props.post){
      return <div>Loading</div>
    }
    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button onClick={this.handleDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete</button>
        Post: {this.props.params.id};
        <h3>{this.props.post.title}</h3>
        <small>{this.props.post.categories}</small>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    post: state.posts.post
  }
}

export default connect (mapStateToProps, { fetchSingle, deletePost}) (PostShow);
