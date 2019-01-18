import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThoughtList } from './ThoughtList.js';

describe('ThoughtList', () => {

  it('should match the snapshot with no thoughts', () => {
    const mockThoughtList = [];
    const wrapper = shallow(<ThoughtList thoughtList={mockThoughtList} />);
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with thoughts', () => {
    const mockThoughtList = [{}, {}];
    const wrapper = shallow(<ThoughtList thoughtList={mockThoughtList} />);
    expect(wrapper).toMatchSnapshot()
  });
});
