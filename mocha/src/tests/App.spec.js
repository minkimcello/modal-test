import React from 'react';
import App from '../App';

// using mount instead of render because mount mentions something about requiring dom whereas render doesn't so it might be just for instances

describe('Local State', () => {
  let frontside = "Frontside"
  it('Find moddal', () => {
    const app = mount(<App />);
    expect(app.find('Modal')).to.have.length(0); // before click
    app.find('button').at(0).simulate('click');
    expect(app.find('Modal')).to.have.length(1); // after click

    app.find('input').at(0).simulate('change', { target: { value: frontside } });

    expect(app.find('button').at(1).text()).to.equal("SUBMIT"); // confirm we have the right button
    app.find('button').at(1).simulate('submit');
    expect(app.find('button')).to.have.length(1);
    expect(app.find('span').text()).to.equal(frontside);
  });
});
