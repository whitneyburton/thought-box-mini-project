import React from 'react';
import { shallow } from 'enzyme';
import { ThoughtCard } from './ThoughtCard.js';

describe('ThoughtCard', () => {

  it('should match the snapshot', () => {
    const mockThought = {};
    const wrapper = shallow(<ThoughtCard thought={mockThought} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should delete a thought when the delete button is clicked', () => {
    const mockThought = {};
    const mockDeleteClick = jest.fn();
    const wrapper = shallow(<ThoughtCard deleteThought={mockDeleteClick} thought={mockThought} />);
    wrapper.find('.delete-button').simulate('click');
    expect(mockDeleteClick).toHaveBeenCalled();
  });



});