import React, { Component } from 'react';
import './App.css';
import CreateThought from './createThought/createThought';
import { ThoughtList } from './thoughtList/thoughtList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      thoughts: []
    };
  }

  createThought = (thought) => {
    const { thoughts } = this.state;
    const newThought = { ...thought, id: Date.now() };
    this.setState({ thoughts: [...thoughts, newThought] });
  }

  deleteThought = (event) => {
    const id = parseInt(event.target.id);
    const thoughts = [...this.state.thoughts];
    let filteredThoughts = thoughts.filter(thought => thought.id !== id);
    this.setState({ thoughts: filteredThoughts });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2 className='thoughtbox-title'>thoughtbox</h2>
        </div>
        <CreateThought
          createThought={this.createThought} />
          <ThoughtList
            thoughtList={this.state.thoughts}
            deleteThought={this.deleteThought}
            editThought={this.editThought}
          />
      </div>
    );
  }
}

export default App;
