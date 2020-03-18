import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('App with React-Testing-Library', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const username = 'Frontside';
  it('Get Label Text before trigger?', () => {
    fireEvent.click(getByText('SIGN IN'));
    fireEvent.change(getByPlaceholderText('USERNAME'), { target: { value: username } });
    fireEvent.click(getByText('SUBMIT'));
    expect(getByText('Frontside')).toBeVisible();
  });
});

/*
- render
- click on sign in button
- enter user/pass
- click submit
- expect(assert(display = hello {username}))
*/
