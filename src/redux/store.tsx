import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { newPostReducer } from "./reducers/newPost";
import postsReducer from "./reducers/posts";
import readPostReducer from "./reducers/readPost";

const middleware = [thunk];

const rootReducer = combineReducers({
  post: postsReducer,
  newPost: newPostReducer,
  readPost: readPostReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
