import React from 'react';
import { shallow } from 'enzyme';
import ThoughtCard from './ThoughtCard.js';

describe('ThoughtCard', () => {

  it('should match the snapshot', () => {
    const mockThought = {};
    const wrapper = shallow(<ThoughtCard thought={mockThought} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with the appropriate default state', () => {
    const wrapper = shallow(<ThoughtCard />);
    expect(wrapper.state('editable')).toEqual(false);
    expect(wrapper.state('title')).toEqual('');
    expect(wrapper.state('body')).toEqual('');
  })

  it('should delete a thought when the delete button is clicked', () => {
    const mockThought = {};
    const mockDeleteClick = jest.fn();
    const wrapper = shallow(<ThoughtCard deleteThought={mockDeleteClick} thought={mockThought} />);
    wrapper.find('.delete-button').simulate('click');
    expect(mockDeleteClick).toHaveBeenCalled();
  });

  it('should turn the editable property boolean to true when the edit button is clicked', () => {
    const wrapper = shallow(<ThoughtCard />);
    expect(wrapper.state('editable')).toEqual(false);
    wrapper.find('.edit-button').simulate('click');
    expect(wrapper.state('editable')).toEqual(true);
  });

  it('should turn the editable property boolean to false when the save button is clicked', () => {
    const wrapper = shallow(<ThoughtCard />);
    wrapper.setState({ editable: true });
    wrapper.find('.edit-button').simulate('click');
    expect(wrapper.state('editable')).toEqual(false);
  });

  it('should update the state properties title and body onChange of edit inputs', () => {
    const wrapper = shallow(<ThoughtCard />);
    const expectedState = {
      title: '',
      body: '',
      editable: false,
    };

    expect(wrapper.state()).toEqual(expectedState);
    wrapper.find('.edit-button').simulate('click');
    expect(wrapper.state('editable')).toEqual(true);
    wrapper.instance().updateInfo({target: {name: 'title', value: 'new idea'}});
    expect(wrapper.state('title')).toEqual('new idea');
  });

});