import React from 'react';
import FormInput from './form-input.component';
import { shallow } from 'enzyme';

describe('FormInput component', () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange on change', () => {
    wrapper.find('FormInputContainer').simulate('change');

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render FormInputLabel if there is a label', () => {
    expect(wrapper.exists('FormInputLabel')).toBe(true);
  });

  it('should not render FormInputLabel if there is no label', () => {
    const mockPropsNoLabel = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    const newWrapper = shallow(<FormInput {...mockPropsNoLabel} />);

    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});
