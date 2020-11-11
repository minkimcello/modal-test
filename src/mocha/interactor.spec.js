import React from 'react';
import App from '../App';
import { Button, Heading, Page, TextField } from 'bigtest';
import { bigtestGlobals } from '@bigtest/globals';
import mount from 'enzyme/build/mount';

// bigtestGlobals.document = mount(<App />);

describe('Simple Testing with Mocha', () => {
  it('displays submitted data from modal', async () => {
    mount(<App/>);
    await Button('SIGN IN').click();
    await TextField({ placeholder: "USERNAME "}).fillIn('minkim');
    await Button('SUBMIT').click();
    await Heading('Hello minkim.').exists();
  });
});
