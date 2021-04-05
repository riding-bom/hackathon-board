import { useDispatch, useSelector } from "react-redux";
import { CombinedState } from "redux";
import { post } from "../../constance/type";
import { addPost } from "../../firebase/API";
import { dateAction } from "../../redux/reducers/newPost";

type buttonProps = {
  className: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
};

const Button = ({ className, children, type }: buttonProps) => {
  const newPost = useSelector(
    (
      state: CombinedState<{
        post: post;
        newPost: post;
      }>
    ) => state.newPost
  );
  const dispatch = useDispatch();

  const onChangeIdAndDate = (e: any) => {
    dispatch(dateAction(new Date()));
    addPost(newPost);
  };

  return (
    <button
      className={className}
      type={type}
      onClick={type === "submit" ? onChangeIdAndDate : () => {}}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
