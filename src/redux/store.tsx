import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todosReducer from "./reducers/todos.reducer";
import thunk from 'redux-thunk';

const store = createStore(todosReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;