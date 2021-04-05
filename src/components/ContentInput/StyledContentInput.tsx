import styled from "styled-components";
import ContentInput from "./ContentInput";

const StyledContentInput = styled(ContentInput)`
  position: relative;

  & textarea {
    box-sizing: border-box;
    width: ${(props) => (props.width ? props.width + "px" : "100%")};
    height: ${(props) => (props.height ? props.height + "px" : "auto")};
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

export default StyledContentInput;
