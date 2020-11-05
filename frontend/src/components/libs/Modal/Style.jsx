import styled, { keyframes } from "styled-components";

/* ===============================================
#  style
=============================================== */
const show = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.85);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: none;
  .modal-background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
  }
  .modal-window {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: var(--background);
    box-shadow: 0 7px 18px rgba(106, 125, 172, 0.2);
    position: fixed;
    z-index: 99999999;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    overflow-y: scroll;
    padding: 10px 10px 10px 10px;
    h3 {
      font-size: 1.4em;
    }
    p {
      margin: 20px 0;
      line-height: 1.7;
    }
  }
  .modal-inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .paragraphs {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &.active {
    display: flex;
    .modal-window {
      animation: ${show} 0.4s forwards;
      -webkit-animation: ${show} 0.4s forwards;
    }
  }
  .confirm-inner {
    display: none;
    &.active {
      display: flex;
    }
  }
`;

export default ModalWrapper;
