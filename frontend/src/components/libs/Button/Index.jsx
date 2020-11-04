import React from "react";
import { PropTypes } from "prop-types";
import { rgba } from "components/libs/Style/GlobalStyle";
import Wrapper from "./Style.jsx";
import rippleEffect from "../Style/Ripple.jsx";

/* ===============================================
# Button
=============================================== */
function Button(props) {
  const {
    id,
    name,
    type,
    color,
    className,
    children,
    onClick,
    width,
    height,
    fontSize,
    round,
    circle,
    border,
    transparent,
    disabled,
  } = props;

  const color10 = rgba(color, 0.1);
  const color20 = rgba(color, 0.2);
  const color30 = rgba(color, 0.3);
  const color40 = rgba(color, 0.4);
  const color50 = rgba(color, 0.5);

  let classNames = `md-btn `;
  classNames += circle ? "circle " : "";
  classNames += border ? "border " : "";
  classNames += transparent ? "transparent " : "";
  classNames += disabled ? "disabled " : "";

  function onClickFunc(e) {
    rippleEffect(e);
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <Wrapper
      className={`md-item ${className}`}
      width={width}
      height={height}
      fontSize={fontSize}
      round={round}
      circle={circle}
      color={color}
      color10={color10}
      color20={color20}
      color30={color30}
      color40={color40}
      color50={color50}
    >
      <button
        type={type}
        id={id}
        name={name}
        className={classNames}
        onClick={onClickFunc}
        disabled={disabled}
      >
        {children}
      </button>
    </Wrapper>
  );
}

/* ===============================================
#  prop types
=============================================== */
Button.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  className: PropTypes.any,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  round: PropTypes.bool,
  border: PropTypes.bool,
  circle: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  width: "",
  height: "",
  fontSize: "",
  color: "",
  round: false,
  border: false,
  circle: false,
  transparent: false,
  disabled: false,
  children: "",
  onClick: () => {},
};

export default Button;
