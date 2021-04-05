import { Dispatch } from "react";
import { post } from "../../constance/type";
import { getPost } from "../../firebase/API";

const READ_POST = "read-post";

const initialState: post = {
  id: "",
  title: "",
  date: new Date(),
  content: "",
  category: "poem",
};

type action = {
  type: string;
  payload: any;
};

const readPostAsync = (id: string) => async (dispatch: Dispatch<action>) => {
  const snapshot = await getPost(id);
  const post = snapshot.data();
  dispatch({
    type: READ_POST,
    payload: { ...post },
  });
};

const readPostReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case READ_POST:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default readPostReducer;
export { readPostAsync };
