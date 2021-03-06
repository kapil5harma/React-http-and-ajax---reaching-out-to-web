import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

// We will now lazily load NewPost Component
// import NewPost from './NewPost/NewPost';

import asyncComponent from '../../hoc/asyncComponent';

// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    // auth: false
    auth: true
  };

  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline'
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/*
                  // By default pathname or to = "xyz" loads an absolute path.
                  // For example: If you're at kapil5harma.com/post to="/new-post" will take you to kapil5harma.com/new-post
                  // To go tot a relative path i.e, to kapil5harma.com/post/new-post :
                  // Change to or pathname = `${this.props.match.url}/new-post`
                */}
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                  exact
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}

        <Switch>
          {this.state.auth ? (
            // <Route path="/new-post" exact component={NewPost} />
            <Route path="/new-post" exact component={AsyncNewPost} /> // Lazily loading NewPost component now.
          ) : null}
          <Route path="/posts" component={Posts} />

          {/* Handling 404: Page not found */}
          <Route
            render={() => (
              <h1 style={{ textAlign: 'center' }}>Page Not Found</h1>
            )}
          />

          {/* Say we want to load posts even when user goes to '/' */}
          {/* <Redirect from="/" to="/posts" /> */}

          {/* We will put this route in Posts Component */}
          {/* <Route path="/:id" exact component={FullPost} /> */}

          {/* // An alternative
        <Route path="/posts/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
