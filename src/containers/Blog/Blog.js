import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {/*
                  // By default pathname or to = "xyz" loads an absolute path.
                  // For example: If you're at kapil5harma.com/post to="/new-post" will take you to kapil5harma.com/new-post
                  // To go tot a relative path i.e, to kapil5harma.com/post/new-post :
                  // Change to or pathname = `${this.props.match.url}/new-post`
                */}
                <Link
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
