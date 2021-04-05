import { Dispatch } from "react";
import { posts } from "../../constance/type";
import { getAllPost, getEssay, getNovel, getPoem } from "../../firebase/API";

const initialState: posts = [];

const READ_LIST = "read-list";

type action = {
  type: string;
  payload: any;
};

const getAllPostAsync = () => async (dispatch: Dispatch<action>) => {
  const allPost = await getAllPost();
  dispatch({ type: READ_LIST, payload: allPost });
};
const getPoemPostAsync = () => async (dispatch: Dispatch<action>) => {
  const allPost = await getPoem();
  dispatch({ type: READ_LIST, payload: allPost });
};
const getNovelPostAsync = () => async (dispatch: Dispatch<action>) => {
  const allPost = await getNovel();
  dispatch({ type: READ_LIST, payload: allPost });
};
const getEssayPostAsync = () => async (dispatch: Dispatch<action>) => {
  const allPost = await getEssay();
  dispatch({ type: READ_LIST, payload: allPost });
};

const postsReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case READ_LIST:
      return [...action.payload];
    default:
      return state;
  }
};

export default postsReducer;
export {
  getAllPostAsync,
  getPoemPostAsync,
  getNovelPostAsync,
  getEssayPostAsync,
};
