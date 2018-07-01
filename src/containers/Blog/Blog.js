import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
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

        <Route path="/" exact component={Posts} />

        <Switch>
          <Route path="/new-post" exact component={NewPost} />
          <Route path="/:id" exact component={FullPost} />

          {/* // An alternative
        <Route path="/posts/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
