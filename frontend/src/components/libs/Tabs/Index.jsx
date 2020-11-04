import React from "react";
import { PropTypes } from "prop-types";
import styled, { keyframes } from "styled-components";
import { colors, rgba } from "components/libs/Style/GlobalStyle";
import rippleEffect from "../Style/Ripple.jsx";

/* ===============================================
#  Tab
=============================================== */
export const Tab = (props) => {
  const { children, onClick, value, active } = props;

  let { color } = props;
  let color10;
  let color20;
  if (color) {
    color10 = rgba(color, 0.1);
    color20 = rgba(color, 0.2);
  } else {
    color = colors.primary;
    color10 = rgba(colors.primary, 0.1);
    color20 = rgba(colors.primary, 0.2);
  }

  function handleClick(e) {
    rippleEffect(e);
    let target = e.target;
    if (!target.classList.contains("md-btn")) {
      target = target.parentNode;
    }
    if (onClick) {
      onClick(value);
    }
  }

  return (
    <TabStyle
      id={`tab-trigger__${value}`}
      className={`md-btn tab tab-trigger ${active ? "active" : ""}`}
      onClick={handleClick}
      color={color}
      color10={color10}
      color20={color20}
    >
      {children}
    </TabStyle>
  );
};

const ripple = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
`;

const TabStyle = styled.span`
  padding: 10px 25px;
  position: relative;
  transition: 0.2s ease;
  cursor: pointer;
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 0.9em;
  overflow: hidden;
  margin-bottom: -1px;
  .ink {
    display: block;
    position: absolute;
    background: ${(props) => props.color20};
    border-radius: 100%;
    will-change: transform;
    transform: scale(0);
    &.is-animating {
      animation: ${ripple} 0.4s linear;
    }
  }
  &:hover {
    background: ${(props) => props.color10};
  }
  &:before {
    content: "";
    width: 0;
    height: 2px;
    background-color: ${(props) => props.color};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: 0.4s ease;
  }
  &.active {
    &:before {
      width: 100%;
    }
  }
`;
Tab.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Tab.defaultProps = {
  onClick: () => {},
};

/* ===============================================
#  Tabs
=============================================== */
export const Tabs = (props) => {
  return (
    <TabsStyle className={`tab-direction-${props.align}`}>
      {props.children}
    </TabsStyle>
  );
};

const TabsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--lightGray);
  &.tab-direction-center {
    justify-content: center;
  }
  &.tab-direction-left {
    justify-content: flex-start;
  }
  &.tab-direction-right {
    justify-content: flex-end;
  }
`;

Tabs.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
};
Tabs.defaultProps = {
  align: "center",
};

/* ===============================================
#  TabPanel
=============================================== */
export const TabPanel = (props) => {
  const { active } = props;
  return (
    <TabPanelStyle
      id={`tabpanel__${props.value}`}
      className={`tab-panel ${active ? "active" : ""}`}
    >
      {props.children}
    </TabPanelStyle>
  );
};

const TabPanelStyle = styled.div`
  width: 100%;
  display: none;
  &.active {
    display: block;
  }
`;

TabPanel.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Tabs;
