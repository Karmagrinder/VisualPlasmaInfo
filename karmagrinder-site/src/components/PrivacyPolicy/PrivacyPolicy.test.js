import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PrivacyPolicy from './PrivacyPolicy';

describe('PrivacyPolicy', () => {
  let props;
  let shallowPrivacyPolicy;
  let renderedPrivacyPolicy;
  let mountedPrivacyPolicy;

  const shallowTestComponent = () => {
    if (!shallowPrivacyPolicy) {
      shallowPrivacyPolicy = shallow(<PrivacyPolicy {...props} />);
    }
    return shallowPrivacyPolicy;
  };

  const renderTestComponent = () => {
    if (!renderedPrivacyPolicy) {
      renderedPrivacyPolicy = render(<PrivacyPolicy {...props} />);
    }
    return renderedPrivacyPolicy;
  };

  const mountTestComponent = () => {
    if (!mountedPrivacyPolicy) {
      mountedPrivacyPolicy = mount(<PrivacyPolicy {...props} />);
    }
    return mountedPrivacyPolicy;
  };  

  beforeEach(() => {
    props = {};
    shallowPrivacyPolicy = undefined;
    renderedPrivacyPolicy = undefined;
    mountedPrivacyPolicy = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
