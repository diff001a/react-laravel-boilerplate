import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Loading = (props) => {
  return (
    <Wrapper
      id={props.id}
      name={props.name}
      width={props.width}
      height={props.height}
      isLoading={props.isLoading}
      color={props.color}
      className="md-item"
    >
      <div className="loading-icon"></div>
    </Wrapper>
  );
};

/* ===============================================
#  Style
=============================================== */
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

const Wrapper = styled.div`
  .loading-icon {
    border-bottom: 5px solid rgba(0, 0, 0, 0.15);
    border-left: 5px solid rgba(0, 0, 0, 0.15);
    border-right: 5px solid rgba(0, 0, 0, 0.15);
    border-top: 5px solid ${(props) => props.color};
    border-radius: 100%;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${rotate} 0.6s linear infinite;
  }
`;

/* ===============================================
#  types
=============================================== */
Loading.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  isLoading: PropTypes.bool,
  color: PropTypes.string,
};
Loading.defaultProps = {
  width: "60px",
  height: "60px",
  isLoading: true,
  color: "#999",
};

export default Loading;
