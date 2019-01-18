import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { ThoughtList } from './thoughtList/thoughtList';


it('matches the snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot();
});

it('renders a thoughtList with the correct props', () => {
  const thoughtList = [{}, {}, {}];
  const wrapper = shallow(<ThoughtList thoughtList={thoughtList} />)
  expect(wrapper).toHaveProperty('thoughts')  
});

it('initial state is an empty array', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.state('thoughts')).toHaveLength(0);
});

it('createThought adds a thought to state', () => {

});

it('deletes the correct thought from state when deleteThought is called', () => {
  const thoughts = [{ id: 0 }, { id: 2 }, { id: 3 }];
  const wrapper = shallow(<App />);
  wrapper.setState({ thoughts });
  expect(wrapper.state('thoughts')).toHaveLength(3);
  wrapper.instance().deleteThought({ target: { id: 0 } });
  expect(wrapper.state('thoughts')).toHaveLength(2);
});

// Feel free to add additional tests. These are meant just to get you started.
