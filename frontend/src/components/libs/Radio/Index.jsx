import React from "react";
import { PropTypes } from "prop-types";
import styled, { keyframes } from "styled-components";
import { colors, rgba } from "components/libs/Style/GlobalStyle";

function Radio(props) {
  const { id, name, label, value, checked, onChange, className } = props;

  function onChangeFunc(e) {
    if (onChange) {
      onChange({ id: id, name: name, value: value });
    }
  }

  return (
    <Wrapper className={`md-item ${className}`}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={onChangeFunc}
      />
      <label id={`labelFor_${value}`} htmlFor={id} className="labelfor_radio">
        {label}
      </label>
    </Wrapper>
  );
}

/* ===============================================
#  Style
=============================================== */
const ripple = keyframes`
  0% {
    box-shadow: 0px 0px 0px 1px rgba(255,255,255,0);
  }
  50% {
    box-shadow: 0px 0px 0px 8px ${rgba(colors.primary, 0.15)};
  }
  100% {
    box-shadow: 0px 0px 0px 8px rgba(255,255,255,0);
  }
`;

const Wrapper = styled.div`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1.5;
  label {
    position: relative;
    padding: 0 0 0 1.4em;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    vertical-align: top;
    &:before,
    &:after {
      position: absolute;
      content: "";
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
    }
    &:before {
      left: 0;
      top: 0px;
      bottom: 0;
      margin: auto;
      width: 16px;
      height: 16px;
      border: 2px solid var(--lightGray);
      transition: all 0.3s ease-in-out;
    }
    &:after {
      top: 0px;
      bottom: 0;
      left: 4px;
      margin: auto;
      width: 8px;
      height: 8px;
      transform: scale(0);
      background: var(--primary);
    }
  }
  input[type="radio"] {
    display: none;
    &:checked + .labelfor_radio {
      &:before {
        border-color: var(--primary);
        animation: ${ripple} 0.45s linear forwards;
      }
      &:after {
        transform: scale(1);
      }
    }
  }
`;

/* ===============================================
#  Proptypes
=============================================== */
Radio.propTypes = {
  id: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

Radio.defaultProps = {
  onChange: () => {},
  checked: false,
};

export default Radio;
