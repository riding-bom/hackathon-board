import { useDispatch, useSelector } from "react-redux";
import { CombinedState } from "redux";
import { post } from "../../constance/type";
import { contentAction } from "../../redux/reducers/newPost";

type contentInput = {
  className: string;
  width?: string;
  height?: string;
};

const ContentInput = ({ className }: contentInput) => {
  const newPost = useSelector(
    (
      store: CombinedState<{
        post: post;
        newPost: post;
      }>
    ) => store.newPost
  );
  const dispatch = useDispatch();

  const onChangeContent = ({ target }: { target: HTMLTextAreaElement }) => {
    dispatch(contentAction(target.value));
  };

  return (
    <div className={className}>
      <textarea
        id="contentInput"
        value={newPost.content}
        onChange={onChangeContent}
      ></textarea>
      <label htmlFor="contentInput">
        {newPost.content ? "" : "내용을 입력하세요."}
      </label>
    </div>
  );
};

ContentInput.defaultProps = {
  width: "100%",
};

export default ContentInput;
