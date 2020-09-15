import { createStore } from "redux";
import langReducer from "./reducers/langReducer";

let store = createStore(langReducer);
export default store;
