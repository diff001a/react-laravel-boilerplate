import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Wrapper, SlideWrapper } from "./Style";
import Dots from "./Dots";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const Slider = (props) => {
  const {
    id,
    name,
    width,
    height,
    className,
    children,
    autoPlay,
    delay,
    dots,
  } = props;
  const length = Array.from(children).length;
  const [mode, setMode] = useState("");
  const [array, setArray] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const temp = Array.from(children);
    const moveItem = temp[temp.length - 1];
    temp.unshift(moveItem);
    temp.pop();
    setArray(temp);
  }, []);

  useInterval(() => {
    if (autoPlay) {
      onMove("next");
    }
  }, delay);

  const handleCounter = (e) => {
    if (e === "prev") {
      if (counter === 1) {
        setCounter(array.length);
      } else {
        setCounter(counter - 1);
      }
    }
    if (e === "next") {
      if (counter === array.length) {
        setCounter(1);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  const onNext = () => {
    const temp = array;
    const firstItem = temp[0];
    temp.push(firstItem);
    temp.shift();
    setArray(temp);
  };

  const onPrev = () => {
    const temp = array;
    const lastItem = temp[temp.length - 1];
    temp.unshift(lastItem);
    temp.pop();
    setArray(temp);
  };

  const onMove = (e) => {
    handleCounter(e);
    if (mode === "prev") {
      onPrev();
    }
    if (mode === "next") {
      onNext();
    }
    setMode("");
    setTimeout(() => {
      setMode(e);
    }, 50);
  };

  return (
    <Wrapper
      id={id}
      name={name}
      width={width}
      count={length}
      height={height}
      className={`${className}`}
    >
      <div className="slider">
        <div className="slider__inner">
          {array.map((e, i) => {
            return (
              <SlideWrapper
                key={i}
                width={width}
                height={height}
                count={i}
                className={`slider__item ${mode}`}
              >
                {e}
              </SlideWrapper>
            );
          })}
        </div>
        <div className="slider__navigation">
          <div className="slider__prev" onClick={() => onMove("prev")} />
          <div className="slider__next" onClick={() => onMove("next")} />
        </div>
      </div>
      {dots ? (
        <Dots
          length={length}
          counter={counter}
          onNext={onNext}
          onPrev={onPrev}
          mode={mode}
          setMode={setMode}
          setCounter={setCounter}
        />
      ) : (
        ""
      )}
    </Wrapper>
  );
};

/* ===============================================
#  types
=============================================== */
Slider.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  autoPlay: PropTypes.bool,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
  dots: PropTypes.bool,
};
Slider.defaultProps = {
  width: "300px",
  height: "300px",
  autoPlay: false,
  delay: 5000,
  dots: false,
};

export default Slider;
