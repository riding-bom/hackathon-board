import { useDispatch, useSelector } from "react-redux";
import { CombinedState } from "redux";
import { post } from "../../constance/type";
import { titleAction } from "../../redux/reducers/newPost";

type titleInputProps = {
  className: string;
  width?: string;
};

const TitleInput = ({ className }: titleInputProps) => {
  const newPost = useSelector(
    (
      store: CombinedState<{
        post: post;
        newPost: post;
      }>
    ) => store.newPost
  );
  const dispatch = useDispatch();

  const onChangeTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(titleAction(target.value));
  };

  return (
    <div className={className}>
      <input
        id="titleInput"
        type="text"
        value={newPost.title}
        onChange={onChangeTitle}
      ></input>
      <label htmlFor="titleInput">
        {newPost.title ? "" : "제목을 입력하세요."}
      </label>
    </div>
  );
};

TitleInput.defaultProps = {
  width: "100%",
};

export default TitleInput;
