import React from 'react';
import App from '../App';

// using mount instead of render because mount mentions something about requiring dom whereas render doesn't so it might be just for instances

describe('Simple Testing with Mocha', () => {
  it('displays submitted data from modal', () => {
    const app = mount(<App />);
    expect(app.find('Modal')).to.have.length(0); // before click
    app.find('button').at(0).simulate('click');
    expect(app.find('Modal')).to.have.length(1); // after click

    app.find('input').at(0).simulate('change', { target: { value: 'minkim' } });

    expect(app.find('button').at(1).text()).to.equal('SUBMIT');
    app.find('button').at(1).simulate('submit');
    expect(app.find('button')).to.have.length(1);
    expect(app.find('p').text()).to.equal('Hello minkim.');
  });
});
