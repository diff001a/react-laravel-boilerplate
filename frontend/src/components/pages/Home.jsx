import React, { useEffect } from "react";
import styled from "styled-components";
import { useStore, useDispatch } from "contexts/contexts.js";
import { getTodos } from "actions/actions";
import { Tab, Tabs, TabPanel } from "@diff001a/react-ui-components";
import Loading from "components/parts/Loading";
import Todolist from "components/parts/Todo";
import Form from "components/parts/Form";

const Home = () => {
  const state = useStore();
  const dispatch = useDispatch();
  const get = getTodos();
  useEffect(() => {
    get(dispatch);
  }, []);

  const switchTabs = (str) => {
    dispatch({
      type: "SWITCH_TODOS",
      set: str,
    });
  };

  return (
    <Wrapper>
      <Loading isLoading={state.isLoading} />
      <h1>
        <span>#</span>TODOS
      </h1>
      <Form />
      <Tabs>
        <Tab
          value="all"
          active={state.show === "all"}
          onClick={(e) => switchTabs(e)}
        >
          ALL
        </Tab>
        <Tab
          value="active"
          active={state.show === "active"}
          onClick={(e) => switchTabs(e)}
        >
          ACTIVE
        </Tab>
        <Tab
          value="done"
          active={state.show === "done"}
          onClick={(e) => switchTabs(e)}
        >
          DONE
        </Tab>
      </Tabs>
      <TabPanel value="all" active={state.show === "all"}>
        <Todolist todos={state.todos} />
      </TabPanel>
      <TabPanel value="active" active={state.show === "active"}>
        <Todolist todos={state.active} />
      </TabPanel>
      <TabPanel value="done" active={state.show === "done"}>
        <Todolist todos={state.done} />
      </TabPanel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 550px;
  h1 {
    margin: 10px 0;
    span:first-child {
      color: var(--lightGray);
      padding-right: 10px;
    }
    font-size: 1.5em;
  }
`;

export default Home;
