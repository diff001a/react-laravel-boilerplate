import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Dots = (props) => {
  const { onNext, onPrev, counter, mode, setCounter, setMode, length } = props;
  const items = [];
  const onClick = (i) => {
    if (counter - i === 0) return;
    let type;
    if (counter > i) {
      // prev //
      type = "prev";
      if (mode === "next") {
        if (counter - i === 1) {
          onNext();
        } else {
          for (let index = 1; index < counter - i - 1; index++) {
            onPrev();
          }
        }
      } else {
        for (let index = 1; index <= counter - i; index++) {
          onPrev();
        }
      }
    } else {
      // next //
      type = "next";
      if (mode === "") {
        for (let index = 1; index < i - counter; index++) {
          onNext();
        }
      } else if (mode === "prev") {
        if (i - counter === 1) {
          onPrev();
        } else {
          for (let index = 1; index < i - counter - 1; index++) {
            onNext();
          }
        }
      } else {
        for (let index = 1; index <= i - counter; index++) {
          onNext();
        }
      }
    }
    setCounter(i);
    setMode("");
    setTimeout(() => {
      setMode(type);
    }, 50);
  };
  for (let i = 1; i <= length; i++) {
    items.push(
      <div
        key={i}
        className={`dot ${counter === i ? "active" : ""} `}
        onClick={() => onClick(i)}
      />
    );
  }
  return <div className="dots">{items}</div>;
};

export default Dots;
