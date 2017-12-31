import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

const Test = () => {
  return <div>Test</div>
}

export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostIndex} />
    <Route path="post/new" component={PostNew} />
    <Route path="post/:id" component={PostShow} />
    <Route path="test" component={Test} />
  </Route>
)
