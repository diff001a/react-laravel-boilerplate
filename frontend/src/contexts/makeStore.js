import React, { createContext, useContext, useReducer, useMemo } from "react";

export default function makeStore(reducer, initialState) {
  const storeContext = createContext();
  const dispatchContext = createContext();

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    const contextValue = useMemo(() => [store, dispatch], [store, dispatch]);
    return (
      <dispatchContext.Provider value={contextValue[1]}>
        <storeContext.Provider value={contextValue[0]}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    );
  };

  function useStore() {
    return useContext(storeContext);
  }
  function useDispatch() {
    return useContext(dispatchContext);
  }

  return [StoreProvider, useStore, useDispatch];
}
