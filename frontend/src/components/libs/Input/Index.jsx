import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = (props) => {
  const [focus, toggleFocus] = useState(false);
  const {
    id,
    name,
    type,
    width,
    height,
    className,
    value,
    placeholder,
  } = props;

  const onChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };
  const onFocus = () => {
    if (props.onFocus) {
      props.onFocus();
    }
    toggleFocus(true);
  };
  const onBlur = () => {
    if (props.onBlur) {
      props.onBlur();
    }
    toggleFocus(false);
  };

  return (
    <Wrapper
      width={width}
      height={height}
      className={`${focus ? "focus" : ""} ${className} md-item`}
    >
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={(e) => onFocus(e)}
        onBlur={(e) => onBlur(e)}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

/* ===============================================
#  Style
=============================================== */
const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: var(--paleGray);
  border-bottom: 1px solid var(--lightGray);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 2px;
    bottom: -1px;
    right: 0;
    left: 0;
    margin: auto;
    background: var(--primary);
    transition: 0.2s ease;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
  }
  &.focus {
    &:before {
      width: 100%;
    }
  }
`;

/* ===============================================
#  types
=============================================== */
Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
};
Input.defaultProps = {
  width: "300px",
  height: "35px",
  type: "text",
};

export default Input;
