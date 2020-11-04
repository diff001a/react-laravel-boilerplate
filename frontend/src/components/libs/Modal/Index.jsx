import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { colors, rgba } from "components/libs/Style/GlobalStyle";

import { Button } from "components/libs/Index";
import { SuccessIcon, ErrorIcon, ConfirmIcon } from "./Icons";
import ModalWrapper from "./Style";

/* ===============================================
#  Tabs
=============================================== */
const Modal = (props) => {
  const {
    title,
    title2,
    mode,
    children,
    func,
    active,
    toggle,
    width,
    height,
    label,
    label2,
    cancelLabel,
    message,
    buttonType,
  } = props;
  const [confirm, setConfirm] = useState(false);
  const handleToggle = () => {
    if (func) {
      func();
    }
    toggle(false);
  };
  const handleConfirm = () => {
    if (func) {
      func();
    }
    setConfirm(true);
  };
  const confirmDone = () => {
    setConfirm(false);
    toggle(false);
  };
  if (mode === "confirm") {
    return (
      <ModalWrapper
        className={`${active ? "active" : ""}`}
        width={width}
        height={height}
      >
        <div className="modal-background" onClick={confirmDone} />
        <div className="modal-window">
          <div
            className={`modal-inner confirm-inner ${confirm ? "" : "active"}`}
          >
            <ConfirmIcon />
            <div className="paragraphs">
              <h3>{title}</h3>
              <p>{children}</p>
              <div className="buttons flex center">
                <Button
                  onClick={handleConfirm}
                  className="mr-10"
                  color={colors.warn}
                  transparent={buttonType === "transparent"}
                  border={buttonType === "border"}
                >
                  {label}
                </Button>
                <Button
                  color="#999"
                  onClick={() => toggle(false)}
                  transparent={buttonType === "transparent"}
                  border={buttonType === "border"}
                >
                  {cancelLabel}
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`modal-inner confirm-inner ${confirm ? "active" : ""}`}
          >
            <SuccessIcon />
            <div className="paragraphs">
              <h3>{title2}</h3>
              <p>{message}</p>
              <div className="buttons flex center">
                <Button
                  color={colors.success}
                  onClick={confirmDone}
                  transparent={buttonType === "transparent"}
                  border={buttonType === "border"}
                >
                  {label2}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  if (mode === "success") {
    return (
      <ModalWrapper
        className={`${active ? "active" : ""}`}
        width={width}
        height={height}
      >
        <div className="modal-background" onClick={() => toggle(false)} />
        <div className="modal-window">
          <div className="modal-inner">
            <SuccessIcon />
            <div className="paragraphs">
              <h3>{title}</h3>
              <p>{children}</p>
              <Button
                color={colors.success}
                onClick={handleToggle}
                transparent={buttonType === "transparent"}
                border={buttonType === "border"}
              >
                {label}
              </Button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  if (mode === "error") {
    return (
      <ModalWrapper
        className={`${active ? "active" : ""}`}
        width={width}
        height={height}
      >
        <div className="modal-background" onClick={() => toggle(false)} />
        <div className="modal-window">
          <div className="modal-inner">
            <ErrorIcon />
            <div className="paragraphs">
              <h3>{title}</h3>
              <p>{children}</p>
              <Button
                color={colors.danger}
                onClick={handleToggle}
                transparent={buttonType === "transparent"}
                border={buttonType === "border"}
              >
                {label}
              </Button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  return (
    <ModalWrapper
      className={`${active ? "active" : ""}`}
      width={width}
      height={height}
    >
      <div className="modal-background" onClick={() => toggle(false)} />
      <div className="modal-window">
        <div className="modal-inner">
          <div className="paragraphs mt-10">
            <h3>{title}</h3>
            <p>{children}</p>
            <Button
              onClick={handleToggle}
              transparent={buttonType === "transparent"}
              border={buttonType === "border"}
            >
              {label}
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  mode: PropTypes.oneOf(["error", "success", "confirm", "normal"]),
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
  label: PropTypes.string,
  label2: PropTypes.string,
  cancelLabel: PropTypes.string,
  message: PropTypes.string,
  buttonType: PropTypes.oneOf(["border", "transparent"]),
};
Modal.defaultProps = {
  mode: "normal",
  width: "400px",
  height: "50vh",
  label: "OK",
  label2: "DONE",
  cancelLabel: "CANCEL",
  title2: "処理が完了しました",
};

export default Modal;
