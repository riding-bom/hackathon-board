/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import StyledButton from "../../../components/Button/StyledButton";
import StyledContentInput from "../../../components/ContentInput/StyledContentInput";
import StyledSelect from "../../../components/Select/StyledSelect";
import StyledTitleInput from "../../../components/TitleInput/StyledTitleInput";
import { idAction } from "../../../redux/reducers/newPost";

type writeProps = {
  className: string;
};

const Write = ({ className }: writeProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(idAction());
  }, []);

  const uploadPost = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={className} onSubmit={uploadPost}>
      <StyledSelect />
      <StyledTitleInput className="title-input" />
      <StyledContentInput className="content-input" height="400" />
      <StyledButton
        width="960"
        className="write-submit"
        children="UPLOAD"
        type="submit"
      />
    </form>
  );
};

export default Write;
