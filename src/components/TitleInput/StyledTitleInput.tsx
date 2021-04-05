import styled from "styled-components";
import TitleInput from "./TitleInput";

const StyledTitleInput = styled(TitleInput)`
  position: relative;

  & input {
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    font-size: 2rem;
    padding: 1em;
  }

  & label {
    position: absolute;
    font-size: 2rem;
    top: 1em;
    left: 1em;
  }
`;

export default StyledTitleInput;
