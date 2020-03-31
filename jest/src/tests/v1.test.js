import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Simple Testing with Jest', () => {
  const { getByText, getByPlaceholderText, queryByTestId } = render(<App />);
  it('displays submitted data from modal', () => {
    fireEvent.click(getByText('SIGN IN'));
    expect(queryByTestId('modal')).toBeVisible();
    fireEvent.change(getByPlaceholderText('USERNAME'), { target: { value: 'minkim' } });
    fireEvent.click(getByText('SUBMIT'));
    expect(queryByTestId('modal')).toBeNull();
    expect(getByText('minkim')).toBeVisible();
  });
});

