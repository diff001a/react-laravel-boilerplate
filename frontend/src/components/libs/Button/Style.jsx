import styled, { keyframes } from "styled-components";
import { colors, rgba } from "components/libs/Style/GlobalStyle";

/* ===============================================
# style
=============================================== */
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

const Wrapper = styled.div`
  .md-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${(props) => props.color || colors.primary};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "40px"};
    font-size: ${(props) => props.fontSize || ".88em"};
    padding: ${(props) => (props.width ? "0px 5px" : "0px 20px")};
    text-decoration: none;
    line-height: 1;
    padding-top: 0;
    color: #fff;
    border-radius: ${(props) => (props.round ? "50px" : "5px")};
    box-shadow: 0 2px 3px 0px
      ${(props) => props.color40 || rgba(colors.primary, 0.4)};
    border: none;
    transition: box-shadow 0.2s ease-in-out;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    user-select: none;
    font-weight: 600;
    letter-spacing: 0.05rem;
    &:hover {
      background: ${(props) => props.color || colors.primary};
      box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15),
        0 4px 12px -3px ${(props) => props.color50 || rgba(colors.primary, 0.5)};
    }
    i {
      padding: 0px 3px;
      line-height: 1;
      font-size: 1rem;
    }
    span {
      padding: 0px 3px;
      font-weight: 600;
      letter-spacing: 0.05rem;
    }
    .ink {
      display: block;
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 100%;
      will-change: transform;
      transform: scale(0);
      &.is-animating {
        animation: ${ripple} 0.4s linear;
      }
    }
  }
  .circle {
    width: ${(props) => props.width || "40px"};
    height: ${(props) => props.height || "40px"};
    padding: 0;
    border-radius: 50%;
    i {
      font-size: ${(props) => props.fontSize || "1rem"};
      padding: 0px;
      margin: 0px;
      padding-top: 1px;
      line-height: 1;
    }
  }
  .transparent,
  .border {
    padding: ${(props) => (props.width ? "0px 5px" : "0px 10px")};
    color: ${(props) => props.color || colors.primary};
    background: none;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      background: ${(props) => props.color10 || rgba(colors.primary, 0.1)};
    }
    .ink {
      background: ${(props) => props.color20 || rgba(colors.primary, 0.2)};
    }
  }
  .border {
    border: 1px solid ${(props) => props.color40 || rgba(colors.primary, 0.4)};
    padding: ${(props) => (props.width ? "0px 5px" : "0px 20px")};
  }
  .disabled {
    background: #bbb;
    color: #fff;
    cursor: not-allowed !important;
    box-shadow: 0 2px 2px -1px rgba(88, 88, 88, 0.1),
      0 2px 8px 0px rgba(0, 0, 0, 0.1);
    .ink {
      display: none;
    }
    &:hover {
      background: #bbb;
      box-shadow: 0 2px 2px -1px rgba(88, 88, 88, 0.1),
        0 2px 8px 0px rgba(0, 0, 0, 0.1);
    }
    &.transparent,
    &.border {
      background: none;
      color: #999;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }
    &.border {
      border: 1px solid #eee;
    }
  }
`;

export default Wrapper;
