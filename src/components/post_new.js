import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import PropTypes from 'prop-types';

class PostNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  Submit(data){
    this.props.createPost(data)
    .then(()=>{
      this.context.router.push('/');
    })
  }

  render(){
    const { handleSubmit, fields: { title, categories, content } } = this.props;
    return (
      <div>
      <h3>Create A New Post</h3>
      <form onSubmit={handleSubmit(this.Submit.bind(this))}>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">{title.touched ? title.error : ''}</div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">{categories.touched ? categories.error : ''}</div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">{content.touched ? content.error : ''}</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
      </div>
    )
  }
}

function validate(value){
  const errors = {};
  if(!value.title){
    errors.title = 'Enter a title';
  }
  if(!value.categories){
    errors.categories = 'Enter categories';
  }
  if(!value.content){
    errors.content = 'Enter contents';
  }
  return errors;
}


export default reduxForm ({
  form: 'PostNewForm',
  fields: [ 'title','categories','content' ],
  validate
}, null, { createPost }) (PostNew);
