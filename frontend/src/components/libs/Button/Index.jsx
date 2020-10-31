import React from "react";
import { PropTypes } from "prop-types";
import { colors, rgba } from "components/libs/Style/GlobalStyle";
import Wrapper from "./Style.jsx";
import rippleEffect from "./Ripple.jsx";

/* ===============================================
# Button
=============================================== */
function Button(props) {
  const {
    id,
    name,
    type,
    className,
    children,
    onClick,
    href,
    width,
    height,
    fontSize,
    round,
    circle,
    border,
    transparent,
    disabled,
  } = props;

  /* color setting */
  let { color } = props;
  if (color === "primary") {
    color = colors.primary;
  } else if (color === "warn") {
    color = colors.warn;
  } else if (color === "success") {
    color = colors.success;
  } else if (color === "danger") {
    color = colors.danger;
  } else if (color === "secondary") {
    color = colors.secondary;
  } else if (color === "info") {
    color = colors.info;
  }

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
    if (href) {
      window.location.href = href;
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
  id: PropTypes.string,
  name: PropTypes.string,
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
  href: PropTypes.string,
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
  href: "",
};

export default Button;
