import * as React from "react";
import styled, { keyframes } from "styled-components";
import { rgba, colors } from "components/libs/Style/GlobalStyle";

/* ===============================================
#  keyframes
=============================================== */
const animateSuccessLong = keyframes`
    0%,
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
    }
`;
const rotatePlaceholder = keyframes`
    0%,
    5% {
      transform: rotate(-45deg);
    }
    100%,
    12% {
      transform: rotate(-405deg);
    }
`;
const animateErrorIcon = keyframes`
    0% {
      transform: rotateX(100deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 1;
    }
`;

const animateXLeft = keyframes`
    0%,
    65% {
      left: 82px;
      top: 95px;
      width: 0;
    }
    84% {
      left: 14px;
      top: 33px;
      width: 47px;
    }
    100% {
      left: 17px;
      top: 37px;
      width: 47px;
    }
`;

const animateXRight = keyframes`
    0%,
    65% {
      right: 82px;
      top: 95px;
      width: 0;
    }
    84% {
      right: 14px;
      top: 33px;
      width: 47px;
    }
    100% {
      right: 16px;
      top: 37px;
      width: 47px;
    }
`;

const pulseWarning = keyframes`
    0% {
      background-color: #fff;
      transform: scale(1);
      opacity: 0.5;
    }
    30% {
      background-color: #fff;
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      background-color: ${colors.warn};
      transform: scale(1.7);
      opacity: 0;
    }
`;

const animateSuccessTip = keyframes`
    0%,
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
`;

/* ===============================================
#  Styles
=============================================== */
const IconWrapper = styled.div`
  .f-modal-alert {
    background-color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin: 20px;
    padding: 50px;
  }
  .f-modal-alert,
  .f-modal-icon {
    border-radius: 50%;
    border: 4px solid gray;
    box-sizing: content-box;
    height: 80px;
    margin-bottom: 25px;
    padding: 0;
    position: relative;
    width: 80px;

    /* Success icon */
    &.f-modal-success,
    &.f-modal-error {
      border-color: ${colors.success};
      &:after,
      &:before {
        background: #fff;
        content: "";
        height: 120px;
        position: absolute;
        transform: rotate(45deg);
        width: 60px;
      }
      &:before {
        border-radius: 120px 0 0 120px;
        left: -33px;
        top: -7px;
        transform-origin: 60px 60px;
        transform: rotate(-45deg);
      }
      &:after {
        border-radius: 0 120px 120px 0;
        left: 30px;
        top: -11px;
        transform-origin: 0 60px;
        transform: rotate(-45deg);
      }
      .f-modal-placeholder {
        border-radius: 50%;
        border: 4px solid ${rgba(colors.success, 0.2)};
        box-sizing: content-box;
        height: 80px;
        left: -4px;
        position: absolute;
        top: -4px;
        width: 80px;
        z-index: 2;
      }
      .f-modal-fix {
        background-color: #fff;
        height: 90px;
        left: 28px;
        position: absolute;
        top: 8px;
        transform: rotate(-45deg);
        width: 5px;
        z-index: 1;
      }
      .f-modal-line {
        background-color: ${colors.success};
        border-radius: 2px;
        display: block;
        height: 5px;
        position: absolute;
        z-index: 2;
        &.f-modal-tip {
          left: 13px;
          top: 46px;
          transform: rotate(45deg);
          width: 25px;
        }
        &.f-modal-long {
          right: 8px;
          top: 38px;
          transform: rotate(-45deg);
          width: 47px;
        }
      }
    }

    /* Error icon */
    &.f-modal-error {
      border-color: ${colors.danger};
      .f-modal-x-mark {
        display: block;
        position: relative;
        z-index: 2;
      }
      .f-modal-placeholder {
        border: 4px solid ${rgba(colors.danger, 0.2)};
      }
      .f-modal-line {
        background-color: ${colors.danger};
        top: 37px;
        width: 47px;
        &.f-modal-left {
          left: 17px;
          transform: rotate(45deg);
        }
        &.f-modal-right {
          right: 16px;
          transform: rotate(-45deg);
        }
      }
    }

    /* Warning icon */
    &.f-modal-warning {
      border-color: ${colors.warn};
      position: relative;
      &:before {
        animation: ${pulseWarning} 1.5s linear infinite;
        background-color: #fff;
        border-radius: 50%;
        content: "";
        display: inline-block;
        height: 100%;
        opacity: 0;
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        margin: auto;
      }
      &:after {
        background-color: #fff;
        border-radius: 50%;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1;
      }
    }
    &.f-modal-warning .f-modal-body {
      background-color: ${colors.warn};
      border-radius: 2px;
      height: 47px;
      left: 50%;
      margin-left: -2px;
      position: absolute;
      top: 10px;
      width: 5px;
      z-index: 2;
    }
    &.f-modal-warning .f-modal-dot {
      background-color: ${colors.warn};
      border-radius: 50%;
      bottom: 10px;
      height: 7px;
      left: 50%;
      margin-left: -3px;
      position: absolute;
      width: 7px;
      z-index: 2;
    }
    .f-modal-icon {
      margin-top: 50px;
    }
  }

  /* animation set */
  .animateSuccessTip {
    animation: ${animateSuccessTip} 0.75s;
  }
  .animateSuccessLong {
    animation: ${animateSuccessLong} 0.75s;
  }
  .f-modal-icon.f-modal-success.animate:after {
    animation: ${rotatePlaceholder} 4.25s ease-in;
  }
  .f-modal-icon.f-modal-error.animate:after {
    animation: ${rotatePlaceholder} 4.25s ease-in;
  }
  .animateErrorIcon {
    animation: ${animateErrorIcon} 0.5s;
  }
  .animateXLeft {
    animation: ${animateXLeft} 0.75s;
  }
  .animateXRight {
    animation: ${animateXRight} 0.75s;
  }
`;

/* ===============================================
#  Icons
=============================================== */

export const SuccessIcon = () => {
  return (
    <IconWrapper className="icon-wrapper">
      <div className="f-modal-icon f-modal-success animate">
        <span className="f-modal-line f-modal-tip animateSuccessTip" />
        <span className="f-modal-line f-modal-long animateSuccessLong" />
        <div className="f-modal-placeholder" />
        <div className="f-modal-fix" />
      </div>
    </IconWrapper>
  );
};

export const ErrorIcon = () => {
  return (
    <IconWrapper>
      <div className="f-modal-icon f-modal-error animate">
        <span className="f-modal-x-mark">
          <span className="f-modal-line f-modal-left animateXLeft" />
          <span className="f-modal-line f-modal-right animateXRight" />
        </span>
        <div className="f-modal-placeholder" />
        <div className="f-modal-fix" />
      </div>
    </IconWrapper>
  );
};

export const ConfirmIcon = () => {
  return (
    <IconWrapper>
      <div className="f-modal-icon f-modal-warning scaleWarning">
        <span className="f-modal-body pulseWarningIns" />
        <span className="f-modal-dot pulseWarningIns" />
      </div>
    </IconWrapper>
  );
};
