import React from "react";
import { useStore, useDispatch } from "contexts/contexts.js";
import { postTodo } from "actions/actions";
import { Input, Button } from "components/libs/Index";

const Form = () => {
  const state = useStore();
  const dispatch = useDispatch();
  const post = postTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.input !== "" && state.isLoading === false) {
      post(state, dispatch);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex mb-20">
      <Input
        value={state.input}
        width="calc(100% - 130px)"
        height="40px"
        className="mr-10"
        onChange={(e) =>
          dispatch({
            type: "CHANGE_VALUE",
            data: e.target.value,
          })
        }
        placeholder="TYPE HERE ..."
      />
      <Button type="submit" width="120px">
        + ADD
      </Button>
    </form>
  );
};

export default Form;
