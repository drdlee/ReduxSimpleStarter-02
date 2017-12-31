import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import PropTypes from 'prop-types';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmitYo(props){
    this.props.createPost(props)
    .then(()=>{
      this.context.router.push('/')
    });
  }

  render(){
    const { handleSubmit, fields: { title, categories, content } } = this.props;
    return (
      <div>
        <h3>Create A New Post</h3>
        <form onSubmit={handleSubmit(this.onSubmitYo.bind(this))}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}/>
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" {...content}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default reduxForm ({
  form: 'PostNewForm',
  fields: [ 'title', 'categories', 'content' ]
}, null, { createPost }) (PostNew);
