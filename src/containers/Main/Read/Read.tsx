import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { CombinedState } from "redux";
import { post } from "../../../constance/type";
import { readPostAsync } from "../../../redux/reducers/readPost";
import purify from 'dompurify';

type readProps = {
  className: string;
};

const Read = ({ className }: readProps) => {
  const readPost = useSelector(
    (
      state: CombinedState<{
        readPost: post;
      }>
    ) => state.readPost
  );
  const dispatch = useDispatch();

  const location = useLocation().pathname.match(/[0-9]+/) as RegExpMatchArray;
  const id = location[0];

  useEffect(() => {
    dispatch(readPostAsync(id));
  }, []);

  return (
    <article className={className}>
      <h1>{readPost.title}</h1>
      <p dangerouslySetInnerHTML={ {__html:purify.sanitize(readPost.content)} }></p>
    </article>
  );
};

export default Read;
