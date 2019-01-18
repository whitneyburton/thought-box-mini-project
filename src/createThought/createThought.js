import React, { Component } from 'react';
import './createThought.css';


class CreateThought extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createThought(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return(
      <form className='CreateThought'>
        <input
          name='title'
          className='title-input inputs'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Idea'></input>
        <input
          name='body'
          className='body-input inputs'
          value={this.state.body}
          onChange={this.handleChange}
          placeholder='Description'></input>
        <button
          className='create-thought-button'
          onClick={this.handleSubmit}>Create Thought</button>
      </form>
    );
  }
}

export default CreateThought;
