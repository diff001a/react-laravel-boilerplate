import styled from "styled-components";
import { colors, rgba } from "components/libs/Style/GlobalStyle";

/* ===============================================
#  style
=============================================== */
const Wrapper = styled.div`
  width: ${(props) => props.width};
  position: relative;
  .selectbox {
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    border-bottom: 1px solid var(--lightGray);
    height: ${(props) => props.height};
    padding: 0px 10px;
    line-height: 1;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    background: var(--paleGray);
    cursor: pointer;
    span {
      width: 100%;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-right: 10px;
    }
    &:after {
      content: "";
      position: absolute;
      right: 10px;
      width: 8px;
      height: 8px;
      margin-top: 0;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s ease-in-out;
      transform: rotate(45deg);
      border-right: 2px solid var(--gray);
      border-bottom: 2px solid var(--gray);
    }
    &:before {
      content: "";
      position: absolute;
      width: 0px;
      height: 2px;
      bottom: -1px;
      right: 0;
      left: 0;
      margin: auto;
      background: ${colors.primary};
      transition: 0.2s ease;
    }
    &.open {
      &:before {
        width: 100%;
      }
      &:after {
        margin-top: 6px;
        border-right: 2px solid var(--primary);
        border-bottom: 2px solid var(--primary);
        transform: rotate(225deg);
      }
    }
  }
  .select-options {
    background: var(--background);
    width: 100%;
    position: absolute;
    z-index: 99999999999;
    padding: 5px 5px 8px 5px;
    border-radius: 5px;
    top: ${(props) => props.height};
    right: 0;
    left: 0;
    margin: auto;
    overflow-y: scroll;
    transition: 0.3s ease-in-out;
    box-shadow: 0 10px 16px rgba(93, 120, 187, 0.18);
    margin-bottom: 20px;
    li {
      list-style: none;
      padding: 10px 5px;
      margin: 1px 0;
      cursor: pointer;
      border-radius: 3px;
      transition: opacity 0.2s ease 0.35s, background 0.2s ease 0s;
      font-size: 0.9rem;
      line-height: 1.4;
      text-align: left;
      &:hover {
        background: ${colors.primary};
        color: #fff;
        font-weight: 500;
        box-shadow: 0 6px 20px -3px rgba(0, 0, 0, 0.05),
          0px 5px 14px -3px ${rgba(colors.primary, 0.4)};
      }
      &.default {
        color: var(--lightGray);
        &:hover {
          box-shadow: none;
          background: none;
          color: var(--lightGray);
          font-weight: 400;
        }
      }
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    &.open {
      visibility: visible;
      width: 100%;
      min-height: 10px;
      max-height: 200px;
    }
    &.close {
      visibility: hidden;
      width: 70%;
      max-height: 0;
      transition: 0.3s ease-in-out 0.15s;
      li {
        opacity: 0;
        transition: 0.2s ease 0s;
      }
    }
  }
  .modal-background {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    display: none;
    &.active {
      display: block;
    }
  }
`;

export default Wrapper;
