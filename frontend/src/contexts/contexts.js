import makeStore from "./makeStore";
import { reducer, initialState } from "../reducers/reducers";

const [Provider, useStore, useDispatch] = makeStore(reducer, initialState);

export { Provider, useStore, useDispatch };
