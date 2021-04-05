import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CombinedState } from "redux";
import { post, posts } from "../../constance/type";

type listProps = {
  className: string;
  asyncAction: Function;
};

const List = ({ className, asyncAction }: listProps) => {
  const posts = useSelector(
    (
      state: CombinedState<{
        post: posts;
        newPost: post;
      }>
    ) => state.post
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAction());
  }, [asyncAction, dispatch]);

  return (
    <ul className={className}>
      {posts.map((post) => {
        return (
          <Link to={`/${post.id}`} key={post.id}>
            <li key={post.id}>
              <div>{`[${post.category}]`}</div>
              <h2>{post.title}</h2>
              <div>{post.id}</div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default List;
