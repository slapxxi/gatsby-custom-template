import React from 'react';
import { render } from 'react-testing-library';
import IndexPage from './index';

it('renders', () => {
  let { container } = render(<IndexPage />);
  expect(container.firstChild).toMatchSnapshot();
});
