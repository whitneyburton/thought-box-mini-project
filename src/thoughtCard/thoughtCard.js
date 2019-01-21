import React, { Component } from 'react';
import './thoughtCard.css';

export class ThoughtCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body:  '',
      editable: false,
    }
  }

  toggleEdit = () => {
    this.setState({
      editable: !this.state.editable,
    });
  }

  handleEdit = (title, body, id) => {
    this.setState({
      editable: !this.state.editable,
    });
    if (this.state.editable) {
      this.props.editThought(title, body, id);
    }
  }

  updateInfo = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


  render() {
    let { title, body, id, deleteThought } = this.props;
    if (!this.state.editable) {
      return (
        <div key={id} className='ThoughtCard'>
          <h3 className='title'>{title}</h3>
          <p className='body'>{body}</p>
          <div className='buttons-container'>
            <button className='edit-button buttons' onClick={this.toggleEdit}>EDIT</button>
            <button id={id} className='delete-button buttons' onClick={deleteThought}>DELETE</button>
          </div>
        </div>
      )
    } else {
      return (
        <div key={id} className='ThoughtCard'>
          <input className='title-edit-input' name='title' placeholder={title} onChange={this.updateInfo}></input>
          <input className='body-edit-input' name='body' placeholder={body} onChange={this.updateInfo}></input>
          <div className='buttons-container'>
            <button className='edit-button buttons' onClick={() => this.handleEdit(this.state.title, this.state.body, id)}>SAVE</button>
            <button id={id} className='delete-button buttons' onClick={deleteThought}>DELETE</button>
          </div>
        </div>
      )
    }
  }
}

export default ThoughtCard;