import React from "react";
// import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';

import AuthView from './Auth.view'
// import SingInView from './Login.form'

const mockMatch = {
  path: 'auth',
  url: 'auth'
}

it('renders correctly', () => {
  const tree = renderer
    .create(<AuthView />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// describe('Auth component', () => {
//   it('shallow renders without crashing', () => {
//     shallow(<AuthView match={mockMatch} />);
//   });
//   it('SingInView renders without crashing', () => {
//     shallow(<SingInView />)
//   });
// })
