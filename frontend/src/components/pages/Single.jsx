import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Input,
  Textarea,
  Button,
  Checkbox,
  Radio,
  Loading,
  Select,
  Tab,
  Tabs,
  TabPanel,
  Modal,
  Slider,
  colors,
} from "@diff001a/react-ui-components";

const Single = () => {
  const [value, setValue] = useState("");
  // tab //
  const [tabActive, setTab] = useState("one");
  // modal //
  const [modalActive, setModal] = useState(false);
  const [confirmModalActive, setConfirmModal] = useState(false);
  const [successModalActive, setSuccessModal] = useState(false);
  const [errorModalActive, setErrorModal] = useState(false);

  useEffect(() => {
    console.log(value);
  }, [value]);

  function test() {
    console.log("Hi from single page");
  }

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
        <h2>Textarea</h2>
        <div className="inner">
          <Textarea
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
      <div className="item">
        <h2>Tabs</h2>
        <div className="inner">
          <Tabs align="left">
            <Tab
              value="one"
              onClick={(e) => setTab(e)}
              active={tabActive === "one"}
            >
              aaa
            </Tab>
            <Tab
              value="two"
              onClick={(e) => setTab(e)}
              active={tabActive === "two"}
            >
              bbb
            </Tab>
            <Tab
              value="three"
              onClick={(e) => setTab(e)}
              active={tabActive === "three"}
            >
              ccc
            </Tab>
          </Tabs>
          <TabPanel value="one" active={tabActive === "one"}>
            <span className="inner">tabpanel 1</span>
          </TabPanel>
          <TabPanel value="two" active={tabActive === "two"}>
            <span className="inner">tabpanel 22</span>
          </TabPanel>
          <TabPanel value="three" active={tabActive === "three"}>
            <span className="inner">tabpanel 333</span>
          </TabPanel>
        </div>
      </div>
      <div className="item">
        <h2>Modal</h2>
        <div className="inner">
          <Button onClick={() => setModal(true)} color="#f76e8b" border>
            MODAL
          </Button>
          <Button
            onClick={() => setConfirmModal(true)}
            color={colors.warn}
            border
          >
            CONFIRM
          </Button>
          <Button
            onClick={() => setSuccessModal(true)}
            color={colors.success}
            border
          >
            SUCCESS
          </Button>
          <Button
            onClick={() => setErrorModal(true)}
            color={colors.danger}
            border
          >
            ERROR
          </Button>
        </div>
        <Modal
          title="これがノーマルモーダルです"
          active={modalActive}
          toggle={setModal}
          label="閉じる"
        >
          アイコンなしのモーダルウィンドウです
        </Modal>
        <Modal
          icon="confirm"
          mode="confirm"
          active={confirmModalActive}
          toggle={setConfirmModal}
          height="300px"
          title="処理を実行しますか？"
          label="実行する"
          cancelLabel="キャンセル"
          label2="閉じる"
          title2="処理が完了しました"
          message="処理が無事完了しました"
          func={test}
        >
          この処理は取り消せません
        </Modal>
        <Modal
          title="処理を実行しました"
          icon="success"
          active={successModalActive}
          toggle={setSuccessModal}
          label="閉じる"
        >
          この処理は無事に完了しました
        </Modal>
        <Modal
          title="処理を中止しました"
          icon="error"
          active={errorModalActive}
          toggle={setErrorModal}
          label="閉じる"
          buttonType="transparent"
        >
          処理を中断しました
        </Modal>
      </div>
      <div className="item">
        <h2>Slider</h2>
        <div className="inner">
          <Slider width="100%" height="300px" autoPlay dots>
            <div className="slide-item">Slide1</div>
            <div className="slide-item">Slide2</div>
            <div className="slide-item">Slide3</div>
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 550px;
  h1 {
    margin: 20px 0;
    span:first-child {
      color: var(--lightGray);
      padding-right: 10px;
    }
    font-size: 1.5em;
  }
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
    width: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .inner {
      width: 100%;
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .md-item {
        margin: 5px;
      }
    }
  }
  .slide-item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary);
    color: #ffffff;
    font-weight: 600;
    font-size: 2em;
  }
`;

export default Single;
