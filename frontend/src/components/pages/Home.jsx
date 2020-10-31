import React, { useEffect } from "react";
import styled from "styled-components";
import { useStore, useDispatch } from "contexts/contexts.js";
import { getTodos } from "actions/actions";
import { Button } from "components/libs/Index";
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
      <div className="flex center tabs">
        <Button
          className={`tab ${state.show === "all" ? "active" : ""}`}
          width="100px"
          onClick={() => switchTabs("all")}
          transparent
        >
          ALL
        </Button>
        <Button
          className={`tab ${state.show === "active" ? "active" : ""}`}
          width="100px"
          onClick={() => switchTabs("active")}
          transparent
        >
          ACTIVE
        </Button>
        <Button
          className={`tab ${state.show === "done" ? "active" : ""}`}
          width="100px"
          onClick={() => switchTabs("done")}
          transparent
        >
          DONE
        </Button>
      </div>
      {state.show === "active" ? <Todolist todos={state.active} /> : ""}
      {state.show === "done" ? <Todolist todos={state.done} /> : ""}
      {state.show === "all" ? <Todolist todos={state.todos} /> : ""}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 550px;
  .tabs {
    width: 100%;
    border-bottom: 1px solid var(--lightGray);
    margin: 20px 0 10px 0;
    .tab {
      position: relative;
      &:before {
        content: "";
        width: 0;
        height: 2px;
        background-color: var(--primary);
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        margin: auto;
        transition: 0.4s ease;
      }
      &.active {
        &:before {
          width: 100%;
        }
      }
    }
  }
`;

export default Home;
