import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('matches the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('renders a thoughtList with the correct props', () => {
  const mockThoughtList = { thoughts: [{}, {}]}
  const wrapper = shallow(<App thoughtList={mockThoughtList}/>)
  expect(wrapper.instance().props.thoughtList).toBe(mockThoughtList)
});

it('initial state is an empty array', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('thoughts')).toHaveLength(0);
});

it('createThought adds a thought to state', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('thoughts')).toHaveLength(0);
  wrapper.instance().createThought({ title: 'abc', body: 'xyz', id: 1279});
  expect(wrapper.state('thoughts')).toHaveLength(1);
});

it('deletes the correct thought from state when deleteThought is called', () => {
  const thoughts = [{ id: 0 }, { id: 2 }, { id: 3 }];
  const wrapper = shallow(<App />);
  wrapper.setState({ thoughts });
  expect(wrapper.state('thoughts')).toHaveLength(3);
  wrapper.instance().deleteThought({ target: { id: 0 } });
  expect(wrapper.state('thoughts')).toHaveLength(2);
});