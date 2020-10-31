import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import Wrapper from "./Style";

export const Selectbox = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const [value, setValue] = useState("");
  const [label, setLabel] = useState("");
  const { id, name, options, width, height, className, onChange } = props;

  useEffect(() => {
    setLabel(options[0].label);
    setValue(options[0].value);
  }, []);

  const handleOnChange = (value, label) => {
    setValue(value);
    setLabel(label);
    toggleOpen(!isOpen);
    if (onChange) {
      onChange({ id: id, name: name, value: value, label: label });
    }
  };

  return (
    <Wrapper width={width} height={height} className={`md-item ${className}`}>
      <div
        className={`modal-background ${isOpen ? "active" : ""}`}
        onClick={() => toggleOpen(!isOpen)}
      />
      <input id={id} name={name} type="hidden" value={value} />
      <div
        className={`selectbox ${isOpen ? "open" : "close"}`}
        onClick={() => toggleOpen(!isOpen)}
      >
        <span>{label}</span>
      </div>
      <div className={`select-options ${isOpen ? "open" : "close"}`}>
        {options.map((e) => {
          return (
            <li
              key={e.value}
              id={e.value}
              onClick={() => handleOnChange(e.value, e.label)}
            >
              {e.label}
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
};

/* ===============================================
#  Proptypes
=============================================== */
Selectbox.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

Selectbox.defaultProps = {
  width: "300px",
  height: "35px",
  onChange: () => {},
};

export default Selectbox;
