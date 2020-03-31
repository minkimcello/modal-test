import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('Simple Testing with Jest', () => {
  const { getByText, getByTestId, queryByTestId } = render(<App />);
  it('displays submitted data from modal', () => {
    fireEvent.click(getByTestId('sign-in-button'));
    expect(queryByTestId('modal')).toBeVisible();
    fireEvent.change(getByTestId('modal-username'), { target: { value: 'minkim' } });
    fireEvent.click(getByTestId('modal-button'));
    expect(queryByTestId('modal')).toBeNull();
    expect(getByText('Hello minkim.')).toBeVisible();
  });
});
