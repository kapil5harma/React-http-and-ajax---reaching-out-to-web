import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Kapil',
    submitted: false
  };

  postDataHandler = () => {
    const postData = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    };
    axios.post('/posts', postData).then(response => {
      console.log('response: ', response);
      // Redirect re-render the page and sets new rootPage.
      // this.setState({ submitted: true });

      // It pushes the page on top of navigation stack, so that back button pops the page and last page can be visited.
      this.props.history.push('/posts');

      // Replace also is similar to Redirect but it does not re-render page.
      // this.props.history.replace('/posts');
    });
  };

  componentDidMount = () => {
    console.log('[NewPosts.js]:\nthis.props: ', this.props);
  };

  render() {
    let redirect = this.state.submitted ? <Redirect to="/posts" /> : null;

    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Kapil">Kapil</option>
          <option value="Doe">Doe</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
