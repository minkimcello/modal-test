import React from 'react';
import App from '../App';

// using mount instead of render because mount mentions something about requiring dom whereas render doesn't so it might be just for instances

describe('Local State', () => {
  it('Find Modal', () => {
    const app = mount(<App />);
    expect(app.find('Modal')).to.have.length(0); // before click
    app.find('button').at(0).simulate('click');
    expect(app.find('Modal')).to.have.length(1); // after click
    app.find('input').at(0).simulate('change', { target: { value: "abcdefg" } });
    app.find('button').at(1).simulate('click');
    expect(app.find('button')).to.have.length(1);
  });
});

/*
- enter user/pass with enzyme
- click submit enzyme
- expect(assert(display = hello {username})) chai
*/
