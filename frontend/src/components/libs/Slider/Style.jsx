import styled, { keyframes } from "styled-components";
/* ===============================================
#  keyframes
=============================================== */
const forward = (props) => {
  return keyframes`
    0% {
      top: ${props.height};
    }
    50% {
      top: ${props.height};
      left: ${props.width}
    }
    100% {
      top: 0px;
      left: ${props.width}
    }
  `;
};

const forward2 = (props) => {
  return keyframes`
    0% {
      left: calc(${props.width} * ${props.count - 1});
    }
    100% {
      left: calc(${props.width} * ${props.count - 2});
    }
  `;
};

const backward = (props) => {
  return keyframes`
    0% {
      top: ${props.height};
    }
    50% {
      top: ${props.height};
      left: -${props.width};
    }
    100% {
      top: 0px;
      left: -${props.width};
    }
  `;
};

const backward2 = (props) => {
  return keyframes`
    0% {
      left: calc(${props.width} * ${props.count - 1});
    }
    100% {
      left: calc(${props.width} * ${props.count});
    }
  `;
};

/* ===============================================
#  Style
=============================================== */
const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  .slider {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    overflow: hidden;
    &__inner {
      width: ${(props) => `calc(${props.width} * ${props.count})`};
      height: ${(props) => props.height};
      display: flex;
    }
    &__item {
      width: ${(props) => props.width};
      height: ${(props) => props.height};
      position: absolute;
      z-index: 99;
    }
    &__navigation {
      width: ${(props) => props.width};
      display: flex;
      justify-content: space-between;
      position: absolute;
      z-index: 999;
      height: 15px;
      top: 0;
      bottom: 0;
      padding: 0 20px;
      margin: auto;
      .slider__prev,
      .slider__next {
        width: 15px;
        height: 15px;
        cursor: pointer;
        transition: 0.2s ease;
        &:hover {
          opacity: 0.7;
        }
      }
      .slider__prev {
        border-left: 3px solid var(--background);
        border-bottom: 3px solid var(--background);
        transform: rotate(45deg);
      }
      .slider__next {
        border-right: 3px solid var(--background);
        border-bottom: 3px solid var(--background);
        transform: rotate(-45deg);
      }
    }
  }
  .dots {
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50px;
      background-color: var(--lightGray);
      margin: 5px;
      cursor: pointer;
      transition: 0.2s ease;
      &.active {
        background-color: var(--primary);
        transform: scale(1.2);
      }
    }
  }
`;
const SlideWrapper = styled.div`
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${(props) => `calc(${props.width} * ${props.count - 1})`};
  &.next {
    animation: ${(props) => forward2(props)} 0.4s ease 0s forwards;
    &:first-child {
      animation: ${(props) => forward(props)} 0.4s ease 0s forwards;
    }
  }
  &.prev {
    animation: ${(props) => backward2(props)} 0.4s ease 0s forwards;
    &:last-child {
      animation: ${(props) => backward(props)} 0.4s ease 0s forwards;
    }
  }
`;

export { SlideWrapper, Wrapper };
