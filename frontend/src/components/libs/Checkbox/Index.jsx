import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

function Checkbox(props) {
  const {
    id,
    name,
    value,
    label,
    checked,
    onChange,
    width,
    height,
    className,
  } = props;

  function onChangeFunc() {
    const items = document.getElementsByName(name);
    let val = [];
    items.forEach((i) => {
      if (i.checked === true) {
        val.push(i.value);
      }
    });
    if (onChange) {
      onChange({ id: id, name: name, value: val });
    }
  }

  return (
    <Wrapper width={width} height={height} className={`md-item ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        className="check"
        defaultChecked={checked}
        onChange={onChangeFunc}
        value={value}
      />
      <label id={`labelFor_${value}`} className="label label_val" htmlFor={id}>
        {label}
      </label>
      <label
        id={`checkboxFor_${value}`}
        className="label_checkbox"
        htmlFor={id}
      />
    </Wrapper>
  );
}

/* ===============================================
#  css
=============================================== */
const Wrapper = styled.div`
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center;
  position: relative;
  line-height: 1.5;
  .label_checkbox {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: block;
    border: 2px solid var(--lightGray);
    position: absolute;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .label_val {
    padding: 0;
    margin: 0;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    padding-left: 1.4em;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
    &:checked ~ .label_checkbox {
      transform: rotate(-45deg);
      height: 0.5rem;
      top: -0.5rem;
      bottom: 0;
      margin: auto;
      border-color: var(--primary);
      border-top-style: none;
      border-right-style: none;
    }
  }
`;

/* ===============================================
#  Proptypes
=============================================== */
Checkbox.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  width: "15px",
  height: "15px",
  checked: false,
  label: "",
  onChange: () => {},
};

export default Checkbox;
