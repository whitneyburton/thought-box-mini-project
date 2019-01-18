import React, { Component } from 'react';

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
      <form>
        <input
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='Thought Title'></input>
        <input
          name='body'
          value={this.state.body}
          onChange={this.handleChange}
          placeholder='Thought Body'></input>
        <button
          onClick={this.handleSubmit}>Create Thought</button>
      </form>
    );
  }
}

export default CreateThought;
