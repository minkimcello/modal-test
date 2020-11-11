import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { Button, Heading, TextField } from 'bigtest';

render(<App />);

describe('Simple Testing with Jest', () => {
  it('displays submitted data from modal', async () => {
    await Button('SIGN IN').click();
    await TextField({ placeholder: 'USERNAME' }).fillIn('minkim');
    await Button('SUBMIT').click();
    await Heading('Hello .').exists();
  });
});
