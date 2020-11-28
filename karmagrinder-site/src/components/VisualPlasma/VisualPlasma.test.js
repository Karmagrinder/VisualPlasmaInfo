import React from 'react';
import { shallow, render, mount } from 'enzyme';
import VisualPlasma from './VisualPlasma';

describe('VisualPlasma', () => {
  let props;
  let shallowVisualPlasma;
  let renderedVisualPlasma;
  let mountedVisualPlasma;

  const shallowTestComponent = () => {
    if (!shallowVisualPlasma) {
      shallowVisualPlasma = shallow(<VisualPlasma {...props} />);
    }
    return shallowVisualPlasma;
  };

  const renderTestComponent = () => {
    if (!renderedVisualPlasma) {
      renderedVisualPlasma = render(<VisualPlasma {...props} />);
    }
    return renderedVisualPlasma;
  };

  const mountTestComponent = () => {
    if (!mountedVisualPlasma) {
      mountedVisualPlasma = mount(<VisualPlasma {...props} />);
    }
    return mountedVisualPlasma;
  };  

  beforeEach(() => {
    props = {};
    shallowVisualPlasma = undefined;
    renderedVisualPlasma = undefined;
    mountedVisualPlasma = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
