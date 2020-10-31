import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Input,
  Button,
  Checkbox,
  Radio,
  Loading,
  Select,
} from "components/libs/Index";

const Single = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Wrapper>
      <h1>
        <span>#</span>COMPONENTS
      </h1>
      <div className="item">
        <h2>Input</h2>
        <div className="inner">
          <Input
            placeholder="placeholder"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <div className="item">
        <h2>Selectbox</h2>
        <div className="inner">
          <Select
            id="select"
            onChange={(e) => setValue(e)}
            options={[
              { value: "value1", label: "label1" },
              { value: "value2", label: "label2" },
              { value: "value3", label: "label3" },
            ]}
          />
        </div>
      </div>
      <div className="item">
        <h2>Button</h2>
        <div className="inner">
          <Button>BUTTON</Button>
          <Button color="#f76e8b">COLOR CUSTOM</Button>
          <Button border>BORDER</Button>
          <Button transparent>TRANSPARENT</Button>
        </div>
      </div>
      <div className="item">
        <h2>Checkbox</h2>
        <div className="inner">
          <Checkbox
            id="checkbox-1"
            value="checkbox-1"
            name="checkbox"
            label="checkbox-1"
            onChange={(e) => setValue(e)}
          />
          <Checkbox
            id="checkbox-2"
            value="checkbox-2"
            name="checkbox"
            label="checkbox-2"
            onChange={(e) => setValue(e)}
          />
          <Checkbox
            id="checkbox-3"
            value="checkbox-3"
            name="checkbox"
            label="checkbox-3"
            onChange={(e) => setValue(e)}
          />
        </div>
      </div>
      <div className="item">
        <h2>Radio</h2>
        <div className="inner">
          <Radio
            id="radio-1"
            value="checkbox-1"
            name="radio"
            label="radio-1"
            checked
            onChange={(e) => setValue(e)}
          />
          <Radio
            id="radio-2"
            value="checkbox-2"
            name="radio"
            label="radio-2"
            onChange={(e) => setValue(e)}
          />
          <Radio
            id="radio-3"
            value="checkbox-3"
            name="radio"
            label="radio-3"
            onChange={(e) => setValue(e)}
          />
        </div>
      </div>
      <div className="item">
        <h2>Loading</h2>
        <div className="inner">
          <Loading />
          <Loading width="30px" height="30px" />
          <Loading color="#f76e8b" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 550px;
  h2 {
    width: 100%;
    text-align: left;
    font-size: 1.2em;
    border-bottom: 1px solid var(--lightGray);
    &:before {
      content: "#";
      color: var(--gray);
      padding-right: 5px;
    }
  }
  .item {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .inner {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .md-item {
        margin: 5px;
      }
    }
  }
`;

export default Single;
