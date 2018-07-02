import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    console.log('[Posts.js]:\nthis.props: ', this.props);
    axios
      .get('/posts')
      .then(response => {
        //   console.log('response: ', response);
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Kapil'
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log('Error in getting posts: ', error);
        // this.setState({ error: true });
      });
  };

  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });

    // If not using  Link, but want to programmatically push/pop pages/containers/components, do it as follows:
    this.props.history.push({ pathname: `/${id}` });

    // Or like this:
    // this.props.history.push(`/${id}`);
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // An alternative
          // <Link to={`/posts/${post.id}`} key={post.id}>
          // <Link to={`/${post.id}`} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
