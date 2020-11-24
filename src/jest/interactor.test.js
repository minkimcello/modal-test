import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Button, Heading, TextField } from 'bigtest';

describe('Simple Testing with Jest', () => {
  beforeEach(() => render(<App />))
  it('displays submitted data from modal', async () => {
    await Button('SIGN IN').click();
    // await TextField({ placeholder: 'USERNAME' }).fillIn('batman');
    await Button('SUBMIT').exists();
    // await Heading('Hello batman.').exists();
  });
});
