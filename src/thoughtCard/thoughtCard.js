import React, { Component } from 'react';
import './thoughtCard.css';

class ThoughtCard extends Component {
  constructor() {
    super();
    this.state = {
      contenteditable: false,
      editOrSave: 'Edit',
    };
  }

  editThought = () => {
    let { contenteditable, editOrSave } = this.state;
    contenteditable = !contenteditable;
    if (editOrSave === 'Edit') {
      this.setState({ contenteditable, editOrSave: 'Save' });
    } else {
      this.setState({ contenteditable, editOrSave: 'Edit' });
    }
  }

  render() {
    let { title, body, id, deleteThought } = this.props;
    let { contenteditable, editOrSave } = this.state;
    return (
      <div key={id} className='ThoughtCard'>
        <h3
          className='title'
          contentEditable={contenteditable}>{title}</h3>
        <p
          className='body'
          contentEditable={contenteditable}>{body}</p>
        <div className='buttons-container'>
        <button
          id={id}            
          onClick={this.editThought}
          className='edit-button buttons'>{editOrSave}</button>
          <button
            id={id}
            onClick={deleteThought}
            className='delete-button buttons'>Delete</button>
        </div>
      </div>
    )
  }
}

export default ThoughtCard;
