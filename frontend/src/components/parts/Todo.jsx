import React from "react";
import { useDispatch } from "contexts/contexts.js";
import styled from "styled-components";
import { Button } from "@diff001a/react-ui-components";
import { toggleTodo, removeTodo } from "actions/actions";

const Icon = styled.b`
  width: 13px;
  height: 13px;
  display: block;
  border: 2px solid var(--lightGray);
  position: absolute;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  &.done {
    width: 12px;
    height: 10px;
    transform: rotate(-45deg);
    height: 0.5rem;
    top: -0.3rem;
    bottom: 0;
    margin: auto;
    border-color: var(--primary);
    border-top-style: none;
    border-right-style: none;
  }
`;

const Wrapper = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px dashed var(--lightGray);
  padding: 7px 5px;
  &:last-child {
    border-bottom: 0;
  }
  .body {
    width: calc(100% - 100px);
    cursor: pointer;
    padding-left: 20px;
    text-align: left;
    font-size: 0.95em;
    line-height: 1.5;
    width: 100%;
  }
  &.done {
    .body {
      text-decoration: line-through;
      color: var(--gray);
    }
  }
`;

const Todo = (props) => {
  const dispatch = useDispatch();
  const toggle = toggleTodo();
  const remove = removeTodo();
  const { id, is_done, body } = props.e;
  return (
    <Wrapper id={id} key={id} className={is_done ? "done" : ""}>
      <span
        name={id}
        width="13px"
        height="13px"
        checked={is_done ? true : false}
        onClick={() => toggle(dispatch, id)}
        className="body"
      >
        <Icon className={is_done ? "done" : ""} />
        <span>{body}</span>
      </span>
      <Button
        width="85px"
        height="35px"
        onClick={() => remove(dispatch, id)}
        transparent
      >
        REMOVE
      </Button>
    </Wrapper>
  );
};

const Todolist = (props) => {
  return (
    <div className="todolist" style={{ width: "100%" }}>
      {props.todos.map((e) => {
        return <Todo key={e.id} e={e} />;
      })}
    </div>
  );
};

export default Todolist;
