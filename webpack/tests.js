import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
// import Profile from './components/Profile';
import Landing from './components/Landing';

describe("The Landing component", function() {
  it("contains h1 with class named logoFont", function() {
    expect(shallow(<Landing />).contains(<h1 className="logoFont">vocal</h1>)).to.equal(true);
  })
})

// describe("The Profile component", function() {
//   it('calls componentDidMount', () => {
//     const wrapper = mount(<Profile />);
//       expect(Profile.prototype.componentDidMount.calledOnce).to.equal(true);
//   })
// })
